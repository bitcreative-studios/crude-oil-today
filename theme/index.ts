import { extendTheme } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import * as ui from './components'
import * as foundations from './foundations'

const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...ui },
})

export default theme
