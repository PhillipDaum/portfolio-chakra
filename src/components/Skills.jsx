import { Box, Tabs, SimpleGrid } from "@chakra-ui/react";
import { DiHtml5, DiReact, DiJavascript1, DiNodejsSmall } from "react-icons/di";

function Skills() {
  return (
    <Box>
      <Tabs.Root defaultValue="use-often">
        <Tabs.List>
          <Tabs.Trigger value="use-often">
            {/* icons in these? */}
            Use a lot
          </Tabs.Trigger>
          <Tabs.Trigger value="use-sometimes">Use sometimes</Tabs.Trigger>
          <Tabs.Trigger value="exposed-to">Exposed to</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="use-often">
          <SimpleGrid>
            {/* icons in here */}
          </SimpleGrid>
        </Tabs.Content>
        <Tabs.Content value="use-sometimes">
          <SimpleGrid>
            {/* icons in here */}
          </SimpleGrid>
        </Tabs.Content>
        <Tabs.Content value="exposed-to">
          <SimpleGrid>
            {/* icons in here */}
          </SimpleGrid>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}

export default Skills;
