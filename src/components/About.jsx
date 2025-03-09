import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

function About() {
  return (
    <Box key="about" scrollSnapAlign="start">
      <Box borderTop="solid" borderBottom="solid" borderColor="border.info">
        <Heading as="h2" textAlign="center">
          About Phil
        </Heading>
      </Box>
      <Grid templateColumns="repeat(7, 1fr)" gap="1rem" padding="1rem">
        <GridItem colSpan={{ sm: "7", md: "3" }} rowSpan="1">
          <Flex direction="column" background="bg" padding={{base:"3rem", md:"1rem", lg:"3rem"}} rounded="md">
            <Image src="src/assets/headshot.png" borderRadius="50%" />
          </Flex>
        </GridItem>

        <GridItem colSpan={{ sm: "7", md: "4" }} rowSpan="1">
          {/* title */}
          <Flex
            direction="column"
            justifyContent="center"
            height="100%"
            rounded="md"
            gap="1rem"
            background="bg"
            padding="1rem"
            alignItems="start"
          >
            <Heading>Phil Daum</Heading>
            <Text>
              Phil Daum is a Software Engineering Apprentice at AnnieCannons and
              a former elementary school art teacher. In the classroom, he
              creatively employed technology and Agile-inspired classroom
              management. Now he brings that same curiosity and didactic flair
              to software engineering — designing projects, discussing code, and
              helping others learn along the way.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default About;
