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
import HeroSection from '../ui/HeroSection'
import FeaturesSection from '../ui/FeaturesSection'

const IndexPage = () => (
  <>
    <Header />
    {/* Hero Section */}
    <HeroSection />
    <Footer />
  </>
)

export default IndexPage
