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
// import skills from "../data/skills.js";

// maybe just list in one thing
function Projects() {
  return (
    <Box>
      <Box borderTop="solid" borderBottom="solid" borderColor="border.info">
        <Heading as="h2" textAlign="center">
          Selected Projects
        </Heading>
      </Box>

      <Flex direction="column" padding="1rem">
        {/* Card 1 */}
        <Grid gap="1rem" templateColumns="repeat(5, 1fr)">
          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src="src/assets/img/world-countries.png"
                rounded="md"
                objectPosition="left"
                width="100%"
                alt=""
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
                <Heading>Where in The World</Heading>
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
                  {/* Add links */}
                  <Button variant="outline" borderColor="border.info">
                    Live App
                  </Button>
                  <Button variant="outline" borderColor="border.info">
                    Learn More
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

        {/* Card 2 */}
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
                <Heading>Where in The World</Heading>
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
                  {/* Add links */}
                  <Button variant="outline" borderColor="border.info">
                    Live App
                  </Button>
                  <Button variant="outline" borderColor="border.info">
                    Learn More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src="src/assets/img/world-countries.png"
                rounded="md"
                objectPosition="left"
                width="100%"
                alt=""
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

        {/* Card 3 */}
        <Grid gap="1rem" templateColumns="repeat(5, 1fr)">
          {/* Image */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            <Flex direction="col" alignItems="center" height="100%">
              <Image
                src="src/assets/img/world-countries.png"
                rounded="md"
                objectPosition="left"
                width="100%"
                alt=""
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
                <Heading>Where in The World</Heading>
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
                  {/* Add links */}
                  <Button variant="outline" borderColor="border.info">
                    Live App
                  </Button>
                  <Button variant="outline" borderColor="border.info">
                    Learn More
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
