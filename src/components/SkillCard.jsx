import { Box, Flex, Heading, Image } from "@chakra-ui/react";

// prop here, they will be different in the thing
function SkillCard({ icon, title }) {
  // its a box, with an image and
  // the name underneath

  return (
    <Box>
      <Flex flexDirection="column" textAlign="center">
        <Image height="5rem" objectFit="contain" src={icon} />
        <Heading as="h4">{title}</Heading>
      </Flex>
    </Box>
  );
}

export default SkillCard;
