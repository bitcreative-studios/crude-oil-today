import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  </ChakraProvider>
)

export default MyApp
