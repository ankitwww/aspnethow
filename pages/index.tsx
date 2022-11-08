import {
  Box,
  Button,
  Heading,
  Img,
  LightMode,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import * as React from 'react';
import { Footer } from '../components/Footer';
import { FaTwitter } from 'react-icons/fa';

const App : NextPage = () => {
  return (
    <Box>
      <Box as="section" bg="gray.800" color="white" py="7.5rem">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Catch up with all .NET Conf 2022 updates
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
              Did you miss any key announcements? 
              Revise all the key announcements with a fun quiz...
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{ base: 'column', md: 'row' }}
            mt="10"
           
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                colorScheme="blue"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                Get started
              </Button>
              <Button
                as="a"
                href="#"
                size="lg"
                colorScheme="whiteAlpha"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                Official Website
              </Button>
            </LightMode>
          </Stack>

          <Box textAlign={"center"}  mb="10" mt="10">
            <Link href="https://twitter.com/search?q=dotnetconf&src=typed_query&f=live" fontSize="md" mt="4" maxW="xl" mx="auto" target={"_blank"}>
               #dotnetConf
            </Link>
          </Box>

          <Box
            className="group"
            cursor="pointer"
            position="relative"
            rounded="lg"
            overflow="hidden"
          >
            <Img
              alt="Dotnet Conf 2022 Bot and Drone"
              src="dotnetconf_bot_drone.png"
            />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App;