import { Box, Flex, Heading } from "@chakra-ui/react";
import skills from "../data/skills.js";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <Box>
      <Box borderTop="solid" borderBottom="solid" borderColor="border.info">
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
          <SkillCard item={item} key={index} />
        ))}
      </Flex>
      <Box>
        {/* Switch to underline */}
        <Heading 
            _hover={{
              transform: "scale(1.05)",
              color:"fg.info",
              transition: "0.2s ease-in-out",
            }}
        as="h2" textAlign="center">
          Continuously Learning
        </Heading>
      </Box>
    </Box>
  );
}

export default Skills;
