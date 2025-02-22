import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

function Intro() {
  // two side by side flexboxes
  // left, which will stack to the top Hi, I'm Phil. I'm a full stack web developer
  // right, stacks to bottom "I work in _______________________- and  __________________________" - typwriter effect
  // one button at the bottom to go down
    const typeEffectText= [ 
        {
            technology: "JavaScript",
            actions: [
              { preposition: "with", phrase: "juggle JSON"},
            ],
          },
          {
            technology: "React",
            actions: [
              { preposition: "with", phrase: "render reusable realities" },
            ],
          },
          {
            technology: "Node.js",
            actions: [
              { preposition: "with", phrase: "navigate networks nimbly" },
            ],
          }
    ]
  return (
    <Box>
      <Flex>
        <Box>
            <Heading as="h1">Hi, I'm <span>Phil</span>. I'm a full stack web developer.</Heading>
            {/* linkedin and Github */}
        </Box>
        
        <Stack>
            <Heading as="h2">I like to <span>Verb</span></Heading>
            <Heading as="h2">in <span>technology</span></Heading>
        </Stack>
      </Flex>
      {/* button here to More about phil */}
    </Box>
  );
}

export default Intro;
