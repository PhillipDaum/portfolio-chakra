import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { SiWordpress, SiGithub, SiExpress } from "react-icons/si";

function SkillCard({ item }) {
  // workaround for dark colored images
  const icons = {
    wordpress: <SiWordpress size="5rem" />,  // Add size prop for better display
    github: <SiGithub size="5rem" />,
    expressjs: <SiExpress size="5rem" />,
  };

  let string = "I am a human."
  console.log(string)

  return (
    <Box
    // animation removed until each icon is in a fixed size box
    // _hover={{
    //   boxShadow: "sm",
    //   transform: "scale(1.01)",
    //   transition: "0.2s ease-in-out",
    //   background: "bg",
    //   padding:"1",
    //   rounded:"md"
    // }}
    >
      <Flex flexDirection="column" textAlign="center" alignItems="center">
        {icons[item.title.toLowerCase().replace(/\s/g, "")] ? (
          icons[item.title.toLowerCase().replace(/\s/g, "")]  // Correctly render the icon component
        ) : (
          <Image height="5rem" objectFit="contain" src={item.image} />
        )}
        <Heading as="h4">{item.title}</Heading>
      </Flex>
    </Box>
  );
}

export default SkillCard;
