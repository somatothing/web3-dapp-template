export interface ClientConfigInterface {
  NEXT_PUBLIC_APP_MODE: string
  NEXT_PUBLIC_BASE_URL: string
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string
  NEXT_PUBLIC_CHAIN: string
  NEXT_PUBLIC_CHAIN_RPC_ENDPOINT: string
  NEXT_PUBLIC_DIAMOND_PROXY_ADDRESS: string
  NEXT_PUBLIC_DATADOG_APPLICATION_ID?: string
  NEXT_PUBLIC_DATADOG_CLIENT_TOKEN?: string
  NEXT_PUBLIC_DATADOG_SITE?: string
  NEXT_PUBLIC_DATADOG_SERVICE?: string
}

export const clientConfig = (() => {
  const env = require('env-var').from({
    NEXT_PUBLIC_APP_MODE: process.env.NEXT_PUBLIC_APP_MODE,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CHAIN: process.env.NEXT_PUBLIC_CHAIN,
    NEXT_PUBLIC_CHAIN_RPC_ENDPOINT: process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_DIAMOND_PROXY_ADDRESS: process.env.NEXT_PUBLIC_DIAMOND_PROXY_ADDRESS,
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
    NEXT_PUBLIC_DATADOG_SITE: process.env.NEXT_PUBLIC_DATADOG_SITE,
    NEXT_PUBLIC_DATADOG_SERVICE: process.env.NEXT_PUBLIC_DATADOG_SERVICE,
  })

  return Object.freeze({
    NEXT_PUBLIC_APP_MODE: env.get('NEXT_PUBLIC_APP_MODE').required().asEnum(['development', 'production']),
    NEXT_PUBLIC_BASE_URL: env.get('NEXT_PUBLIC_BASE_URL').required().asString(),
    NEXT_PUBLIC_CHAIN: env.get('NEXT_PUBLIC_CHAIN').required().asString(),
    NEXT_PUBLIC_CHAIN_RPC_ENDPOINT: env.get('NEXT_PUBLIC_CHAIN_RPC_ENDPOINT').required().asString(),
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: env.get('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID').required().asString(),
    NEXT_PUBLIC_DIAMOND_PROXY_ADDRESS: env.get('NEXT_PUBLIC_DIAMOND_PROXY_ADDRESS').required().asString(),
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: env.get('NEXT_PUBLIC_DATADOG_APPLICATION_ID').default('').asString(),
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: env.get('NEXT_PUBLIC_DATADOG_CLIENT_TOKEN').default('').asString(),
    NEXT_PUBLIC_DATADOG_SITE: env.get('NEXT_PUBLIC_DATADOG_SITE').default('').asString(),
    NEXT_PUBLIC_DATADOG_SERVICE: env.get('NEXT_PUBLIC_DATADOG_SERVICE').default('').asString(),
  }) as ClientConfigInterface
})()
