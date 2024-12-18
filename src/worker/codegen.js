#!/usr/bin/env node
const fs = require('node:fs')
const { glob } = require('glob')
const path = require('node:path')

const jobNames = glob.sync(path.join(__dirname, 'jobs', '*')).map(file => {
  return path.basename(file, path.extname(file))
})
const filterNames = glob.sync(path.join(__dirname, 'chainFilters', '*')).map(file => {
  return path.basename(file, path.extname(file))
})


const generatedDir = path.join(__dirname, 'generated')

const fileHeader = `// This file is auto-generated by worker/codegen.js
// Do not edit this file manually
`

fs.writeFileSync(
  path.join(generatedDir, 'exportedTypes.ts'),
  `${fileHeader}

export type WorkerJobType = "${jobNames.join('" | "')}"`
)


fs.writeFileSync(
  path.join(generatedDir, 'mappings.ts'),
  `${fileHeader}

import { Job, ChainFilterModule } from '../types'

export const jobs: Record<string, Job> = {${jobNames.reduce((a, v) => {
    return `${a}\n${v}: require('../jobs/${v}'),`
  }, '')}
}

export const chainFilters: Record<string, ChainFilterModule> = {${filterNames.reduce((a, v) => {
    return `${a}\n${v}: require('../chainFilters/${v}'),`
  }, '')}
}`
)
