import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <Box background="bg">
        <Flex direction="column" justifyContent="center" alignItems="center" padding=".5rem">
          <Flex gap="1rem">
            <Link href="https://www.linkedin.com/in/daumphil/" target="_blank" _hover={{color:"fg.muted"}} >
              <SiLinkedin size="3rem" />
            </Link>
            <Link href="https://github.com/PhillipDaum" target="_blank" _hover={{color:"fg.muted"}}>
              <SiGithub size="3rem" />
            </Link>
          </Flex>
          <Text paddingTop=".25rem">&copy; Phillip Daum {new Date().getFullYear()}</Text>
        </Flex>
    </Box>
  );
}

export default Footer;
