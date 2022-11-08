import {
  Box,
  Button,
  Divider,
  Heading,
  Img,
  LightMode,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import { NextPage } from "next";
import * as React from "react";
import { Entry } from "../types/Entry";
import { Footer } from "../components/Footer";
import { FaTwitter } from "react-icons/fa";
import { getEntries } from "../utils/notionHelper";
import { useState } from "react";

interface QuizProps {
  facts: Entry[];
}

const Quiz = (props: QuizProps) => {
  const facts = props.facts;
  const [currentFactIndex, setCurrentFactIndex] = useState<number>(0);
  const currentFact = facts[currentFactIndex];

  const onNextFact = () => {
    if (currentFactIndex < facts.length - 1) {
      setCurrentFactIndex(currentFactIndex + 1);
    }
  };
  const onPrevFact = () => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex(currentFactIndex - 1);
    }
  };

  return (
    <Box>
      <Box as="section" color="gray.800" py="7.5rem">
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              .NET 7 - Top things to know
            </Heading>
          </Box>
          <Divider my={4} />
          <Box
            mt={2}
            boxShadow={mode("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack spacing="5">
              <Stack spacing="1">
                <Text fontSize="xs">
                  {currentFact.tags?.map((t) => (
                    <Tag bgColor="teal" color="white" mx={2} key={t}>
                      {t}
                    </Tag>
                  ))}
                </Text>
                <Text fontSize="md">
                  <span style={{ fontWeight: "bold" }}>
                    #{currentFact.displayOrder}.
                  </span>{" "}
                  {currentFact.text}
                </Text>
                {currentFact.link && (
                  <Link
                    href={currentFact.link}
                    fontSize="sm"
                    maxW="xl"
                    mx="auto"
                    target={"_blank"}
                  >
                    <Text mt="4" textAlign={"right"}>
                      Read more...
                    </Text>
                  </Link>
                )}
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="3">
                {currentFactIndex > 0 && (
                  <Button colorScheme="gray" onClick={() => onPrevFact()}>
                    Back
                  </Button>
                )}
                {currentFactIndex < facts.length - 1 && (
                  <Button colorScheme="blue" onClick={() => onNextFact()}>
                    Next
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export async function getStaticProps(context: any) {
  const facts = await getEntries();
  return {
    props: { facts }, // will be passed to the page component as props
  };
}

export default Quiz;
