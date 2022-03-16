import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

const Header = () => {
  return (
    <Box position="absolute" top={0} w="full">
      <Container maxW="container.xl" mx="auto">
        <Box as="header" position="relative" zIndex="10">
          <Box as="nav" aria-label="Main navigation">
            <NavContent.Mobile display={{ base: 'flex', lg: 'none' }} />
            <NavContent.Desktop display={{ base: 'none', lg: 'flex' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
