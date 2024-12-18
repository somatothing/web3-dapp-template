#!/usr/bin/env node
const fs = require('node:fs')
const { glob } = require('glob')
const path = require('node:path')
const { get } = require('lodash')

const PATH_TO_GENERATED = path.join(__dirname, './generated.ts')

if (fs.existsSync(PATH_TO_GENERATED) && process.argv.includes('--no-overwrite')) {
  console.error(`${PATH_TO_GENERATED} already exists, skipping overwrite.`)
  process.exit(0)
}

interface AbiConfig {
  glob: string,
  keyPath?: string,
  types?: string[]
}

const loadAbi = (cfgs: AbiConfig[]): object => {
  const ret: any[] = []

  const fragments: Record<string, Record<string, any>> = {}

  cfgs.forEach(cfg => {
    const files = glob.sync(path.join(__dirname, cfg.glob))

    files.forEach((f: string) => {
      const j = require(f) as object

      const abi = cfg.keyPath ? get(j, cfg.keyPath) : j

      if (abi && Array.isArray(abi)) {
        abi.forEach((f: any) => {
          if (!cfg.types || cfg.types.includes(f.type)) {
            fragments[f.type] = fragments[f.type] || {}
            fragments[f.type][f.name] = f
          }
        })
      }
    })
  })

  Object.keys(fragments).forEach((type: string) => {
    ret.push(...Object.values(fragments[type]))
  })

  return ret
}

const config = require('./config.json') as Record<string, AbiConfig[]>

const abis = Object.keys(config).reduce((acc, name) => {
  try {
    const abi = loadAbi(config[name])
    acc[name] = `const ${name}_ABI = ${JSON.stringify(abi)} as const`
    return acc
  } catch (err) {
    console.error(`Error loading ABI for ${name}:`, err)
    throw err
  }
}, {} as Record<string, any>)

fs.writeFileSync(
  PATH_TO_GENERATED,
  `// This file is auto-generated by shared/abi/codegen.ts

${Object.values(abis).join('\n\n')}

export enum ContractName {
${Object.keys(abis)
  .map(name => `${name} = '${name}'`)
  .join(',\n')}
}

export const getContractAbi = (name: ContractName) => {
  switch (name) {
    ${Object.keys(abis).map(name => `
      case ContractName.${name}:
        return ${name}_ABI
    `).join('\n')}
      default:
        throw new Error('Unknown contract name')
  }
}
`,
  { flag: 'w' }
)


