'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { http, WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'

// TODO: Update your DApp config here
const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  transports: {
    // @Dev: https://wagmi.sh/core/api/transports
    http,
  },
  ssr: true,
})

const rainbowKitTheme = lightTheme({
  accentColor: 'linear-gradient(269.51deg, #6B00FA 10.51%, #AF73FF 93.41%)',
})

const defaultTheme = 'white'

const client = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme={defaultTheme} attribute="class">
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider theme={rainbowKitTheme}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextThemesProvider>
  )
}
