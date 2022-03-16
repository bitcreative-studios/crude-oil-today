import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { CustomSelect, Option } from './CustomSelect'

const FeaturesSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Box as="section" bg="brand.secondary.300" py={20}>
      <Container>
        <Stack spacing="5">
          <Box py={16} bg="bg-accent" color="brand.primary.700">
            <Stack
              spacing="8"
              direction={{ base: 'column', lg: 'row' }}
              justify="space-between"
            >
              <Stack spacing="4" maxW="2xl">
                <Heading size="sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Heading>
              </Stack>
              <Stack
                spacing="3"
                direction={{ base: 'column', sm: 'row' }}
                justify={{ base: 'start' }}
              >
                <Text fontSize={useBreakpointValue({ base: 'lg', lg: 'xl' })}>
                  With this beautiful and responsive React components you will
                  realize your next project in no time.
                </Text>
              </Stack>
            </Stack>
          </Box>
          {isMobile ? (
            <CustomSelect value="Latest Market News">
              <Option value="Latest Market News" />
              <Option value="Oil Price Tracker" />
              <Option value="Gas Price Tracker" />
            </CustomSelect>
          ) : (
            <Tabs
              isFitted
              size="lg"
              variant="enclosed"
              colorScheme="brand.primary"
            >
              <TabList>
                <Tab>Latest Market News</Tab>
                <Tab>Oil Price Tracker</Tab>
                <Tab>Gas Price Tracker</Tab>
              </TabList>
            </Tabs>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default FeaturesSection
