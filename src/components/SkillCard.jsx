import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { SiWordpress, SiGithub } from "react-icons/si";

// look at sizes for stuff
function SkillCard({ item }) {
  // workaround for dark colored images
  const icons = {
    wordpress: <SiWordpress size="5rem" />,  // Add size prop for better display
    github: <SiGithub size="5rem" />,
  };

  return (
    <Box>
      <Flex flexDirection="column" textAlign="center">
        {icons[item.title.toLowerCase()] ? (
          icons[item.title.toLowerCase()]  // Correctly render the icon component
        ) : (
          <Image height="5rem" objectFit="contain" src={item.image} />
        )}
        <Heading as="h4">{item.title}</Heading>
      </Flex>
    </Box>
  );
}

export default SkillCard;
