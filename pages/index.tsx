import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from '../ui/Brands'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

const IndexPage = () => (
  <>
    <Header />
    <Box
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pt="24"
      pb="12"
      overflow="hidden"
      bgImage="url(https://res.cloudinary.com/george-bockari/image/upload/v1647389684/56._Cream_Whisper_sbro31.png)"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        py={20}
      >
        <Flex
          align="flex-start"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          mb="20"
          color="brand.primary.700"
        >
          <Box flex="1" maxW={{ lg: 'xl' }} pt="6" alignSelf="center">
            <Heading as="h1" size="3xl" mt="8" color="brand.primary.700">
              All-in-one online form & survey builder
            </Heading>
            <Text mt="5" fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              adipiscing elit.
            </Text>
            <Button
              mt="8"
              minW="14rem"
              colorScheme="brand.primary"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
            >
              Get Started for free
            </Button>
          </Box>
          <Box boxSize={{ base: '20', lg: '8' }} />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="https://res.cloudinary.com/george-bockari/image/upload/v1647390299/Image_Grid_qig5y4.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
        <Box>
          <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
            Proudly trusted by 5,000+ companies and individuals
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 2, md: 3, lg: 6 }}
            color="gray.500"
            alignItems="center"
            spacing={{ base: '12', lg: '24' }}
            fontSize="2xl"
          >
            <Logos.ChatMonkey />
            <Logos.Wakanda />
            <Logos.Lighthouse />
            <Logos.Plumtic />
            <Logos.WorkScout />
            <Logos.Finnik />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
    <Footer />
  </>
)

export default IndexPage
