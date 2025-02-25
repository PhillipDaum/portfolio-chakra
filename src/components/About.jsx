import { Box, Flex, Heading, Stack, Image, Text } from "@chakra-ui/react";

function About() {
  // two side by side flexboxes

  return (
    <Box>
      <Flex>
        {/* image */}
        <Image src="src/assets/nix.svg" />
        <Box>
            {/* title */}
            <Heading>Phil Daum</Heading>
            <Box>
              <Text>Phil is a dope man, he likes being nice and learning stuff. He used to teach
                little kids art. He even used agile in the classroom. Now you want to hire him
                to make lots of money and he will solve all your problems.
                He learned the growth mindset a long time ago when he taught the littles
                Now he likes doing leetcode. 
              </Text>
            </Box>
            {/* about me! */}
            {/* links */}
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
