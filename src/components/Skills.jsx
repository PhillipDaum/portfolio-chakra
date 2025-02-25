import { Box, Tabs, Grid, GridItem, Flex, Heading } from "@chakra-ui/react";
import skills from "../data/skills.js";
import SkillCard from "./SkillCard";

// maybe just list in one thing
function Skills() {
  return (
    <Box>
      <Box border="teal solid">
        <Heading as="h2" textAlign="center">
          Skills
        </Heading>
      </Box>
      <Flex
        padding="1rem 2.5rem"
        gap="1rem"
        wrap="wrap"
        justifyContent="center"
      >
        {skills.map((item, index) => (
          // edgecase, github can't see it
          <SkillCard item={item} key={index} />
        ))}
      </Flex>
      {/* better border */}
      <Box border="teal solid">
        <Heading as="h2" textAlign="center">
          Continuously Learning
        </Heading>
      </Box>
    </Box>
  );
}

export default Skills;
