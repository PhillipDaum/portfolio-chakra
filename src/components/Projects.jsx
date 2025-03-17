import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Heading,
  Image,
  Button,
  List,
} from "@chakra-ui/react";


function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Box borderTop="solid" borderBottom="solid" borderColor="border.info">
        <Heading as="h2" textAlign="center">
          Selected Projects
        </Heading>
      </Box>

      <Flex direction="column" padding="1rem">
        {/* Card 1 - Where in the World*/}
        <Grid gap="1rem" templateColumns="repeat(5, 1fr)">
          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src="src/assets/img/world-countries.png"
                rounded="md"
                objectPosition="left"
                width="100%"
                alt="web application with many cards of different countries"
              />
            </Flex>
          </GridItem>

          {/* Description */}
          <GridItem colSpan={{ base: "5", md: "2" }}>
            <Flex direction="column" justifyContent="center" height="100%">
              <Flex
                rounded="md"
                direction="column"
                gap="1rem"
                background="bg"
                padding="1rem"
                alignItems="start"
              >
                <Heading>Where in the World</Heading>
                <List.Root gap="1" variant="plain">
                  <List.Item>
                    <Text>
                      {" "}
                      Full Stack web application built with
                      <Box as="span" color="fg.success">
                        {" "}
                        React
                      </Box>{" "}
                      +
                      <Box as="span" color="fg.success">
                        {" "}
                        Vite
                      </Box>
                      ,
                      <Box as="span" color="fg.success">
                        {" "}
                        Chakra UI
                      </Box>
                      , and{" "}
                      <Box as="span" color="fg.success">
                        {" "}
                        Firebase
                      </Box>
                      , and deployed on
                      <Box as="span" color="fg.success">
                        {" "}
                        Netlify
                      </Box>
                      .
                    </Text>
                  </List.Item>
                  <List.Item>
                    Users explore detailed information about countries
                    worldwide. Authenticated users can save their favorite
                    countries for easy access in future sessions.
                  </List.Item>
                </List.Root>
                <Flex gap="1rem">
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://delightful-otter-718495.netlify.app/"
                    target="_blank"
                  >
                    Live App
                  </Button>
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://github.com/PhillipDaum/countries-api-project/tree/v3-login/version-03"
                    target="_blank"
                  >
                    Repository
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>

        {/* Divider */}
        <Box
          borderTop="solid"
          margin="2rem"
          borderColor="border.emphasized"
        ></Box>

        {/* Card 2 - Focus Fox*/}
        <Grid gap="1rem" templateColumns="repeat(5, 1fr)">
          {/* Description */}
          <GridItem colSpan={{ base: "5", md: "2" }}>
            <Flex direction="column" justifyContent="center" height="100%">
              <Flex
                rounded="md"
                direction="column"
                gap="1rem"
                background="bg"
                padding="1rem"
                alignItems="start"
              >
                <Heading>Focus Fox</Heading>
                <List.Root gap="1" variant="plain">
                  <List.Item>
                    <Text>
                      {" "}
                      Full Stack web application built with
                      <Box as="span" color="fg.success">
                        {" "}
                        React
                      </Box>{" "}
                      +
                      <Box as="span" color="fg.success">
                        {" "}
                        Vite
                      </Box>
                      ,
                      <Box as="span" color="fg.success">
                        {" "}
                        CSS
                      </Box>
                      ,
                      <Box as="span" color="fg.success">
                        {" "}
                        Clerk{" "}
                      </Box>
                      (authentication), the{" "}
                      <Box as="span" color="fg.success">
                        {" "}
                        Google Gemini API
                      </Box>
                      , and deployed on
                      <Box as="span" color="fg.success">
                        {" "}
                        Netlify
                      </Box>
                      .
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Box as="span" color="fg.warning">
                        Winner
                      </Box>
                      ,{" "}
                      <Box as="span" color="fg.error">
                        Girl Develop It Hackathon 2024
                      </Box>
                      : transforms a chaotic brain dump into a meticulously
                      organized daily schedule with a kanban-like task
                      management user interface.
                    </Text>
                  </List.Item>
                </List.Root>
                <Flex gap="1rem">
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://www.youtube.com/watch?v=sR8jJ10IKKQ"
                    target="_blank"
                  >
                    Video
                  </Button>
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://github.com/Focus-Fox/focus-fox"
                    target="_blank"
                  >
                    Repository
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src={
                  isHovered
                    ? "src/assets/img/focus-fox.png"
                    : "src/assets/img/gdi.png"
                }
                alt={
                  isHovered
                    ? "colorful AI productivity app"
                    : "hackathon award certificate"
                }
                rounded="md"
                objectPosition="left"
                width="100%"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Flex>
          </GridItem>
        </Grid>

        {/* Divider */}
        <Box
          borderTop="solid"
          margin="2rem"
          borderColor="border.emphasized"
        ></Box>

        {/* Card 3 - Bento Grid */}
        <Grid gap="1rem" templateColumns="repeat(5, 1fr)">
          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src="src/assets/img/bento-box.png"
                rounded="md"
                objectPosition="left"
                width="100%"
                alt="a dynamic bento style web layout"
              />
            </Flex>
          </GridItem>

          {/* Description */}
          <GridItem colSpan={{ base: "5", md: "2" }}>
            <Flex direction="column" justifyContent="center" height="100%">
              <Flex
                rounded="md"
                direction="column"
                gap="1rem"
                background="bg"
                padding="1rem"
                alignItems="start"
              >
                <Heading>Bento Grid</Heading>
                <List.Root gap="1" variant="plain">
                  <List.Item>
                    <Text>
                      {" "}
                      A visually striking project built with
                      <Box as="span" color="fg.success">
                        {" "}
                        React
                      </Box>{" "}
                      +
                      <Box as="span" color="fg.success">
                        {" "}
                        Vite
                      </Box>
                      ,
                      <Box as="span" color="fg.success">
                        {" "}
                        CSS
                      </Box>
                      , and deployed on
                      <Box as="span" color="fg.success">
                        {" "}
                        Netlify
                      </Box>
                      .
                    </Text>
                  </List.Item>
                  <List.Item>
                    Utilizing a dynamic CSS grid with custom media queries,
                    Bento Grid adapts seamlessly across devices.
                  </List.Item>
                </List.Root>
                <Flex gap="1rem">
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://bento-box-grid.netlify.app/"
                    target="_blank"
                  >
                    Live App
                  </Button>
                  <Button
                    as="a"
                    variant="outline"
                    borderColor="border.info"
                    href="https://github.com/PhillipDaum/bento-box/tree/main"
                    target="_blank"
                  >
                    Repository
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default Projects;
