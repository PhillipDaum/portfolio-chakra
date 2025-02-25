import { Box, Tabs, Grid, GridItem, Flex, Heading } from "@chakra-ui/react";
import skills from "../data/skills.js";
import SkillCard from "./SkillCard";


// maybe just list in one thing
function Skills() {
  return (
    <Box>
      <Tabs.Root defaultValue="use-often">
        <Tabs.List>
          <Tabs.Trigger value="use-often">Use Often</Tabs.Trigger>
          <Tabs.Trigger value="use-sometimes">Use sometimes</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="use-often">
          <Flex
            padding="1rem 2.5rem"
            gap="1rem"
            wrap="wrap"
            justifyContent="center"
          >
            {skills.crispy.map((item, index) => (
              // edgecase, github can't see it
              <SkillCard icon={item.image} title={item.title} key={index} />
            ))}
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="use-sometimes">
          <Flex
            padding="1rem 2.5rem"
            gap="1rem"
            wrap="wrap"
            justifyContent="center"
          >
            {skills.lessCrispy.map((item, index) => (
              // edgecase, github can't see it
              <SkillCard icon={item.image} title={item.title} key={index} />
            ))}
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
      {/* better border */}
      <Box border="teal solid">
        <Heading as="h2" textAlign="center">Continuously Learning</Heading>
      </Box>
    </Box>
  );
}

export default Skills;
