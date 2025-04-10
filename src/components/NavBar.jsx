import { useState } from "react";
import { Flex, Link, Box, Heading, Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { ColorModeButton } from "./ui/color-mode";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import ScrollTo from "./ScrollTo";

// Blog link commented out in both
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      bg="bg"
      position="fixed"
      width="100%"
      zIndex={10}
      display="flex"
      height="3rem"
      justifyContent="space-between"
      paddingLeft="3"
      paddingRight="3"
      paddingTop="2"
    >
      <Flex gap=".3rem" alignItems="center">
        <ScrollTo paddingRight=".5rem" area="intro">
          <Heading as="h2">Phil Daum</Heading>
        </ScrollTo>
        <Link
          href="https://github.com/PhillipDaum"
          target="_blank"
          _hover={{ color: "fg.muted" }}
        >
          <SiGithub size="1.5rem" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/daumphil/"
          target="_blank"
          _hover={{ color: "fg.muted" }}
        >
          <SiLinkedin size="1.5rem" />
        </Link>
      </Flex>

      {/* Mobile */}
      <MenuRoot
        onOpenChange={() => setMenuOpen(!menuOpen)} // Track menu state
      >
        <MenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            display={{ base: "block", md: "none" }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </MenuTrigger>
        <MenuContent background="bg">
          <MenuItem value="intro">
            <ScrollTo area="intro" fontWeight="bold">
              Intro
            </ScrollTo>
          </MenuItem>
          <MenuItem value="skills">
            <ScrollTo area="skills" fontWeight="bold">
              Skills
            </ScrollTo>
          </MenuItem>
          <MenuItem value="projects">
            <ScrollTo area="projects" fontWeight="bold">
              Projects
            </ScrollTo>
          </MenuItem>
          <MenuItem value="about">
            <ScrollTo area="about" fontWeight="bold">
              About
            </ScrollTo>
          </MenuItem>
          {/* <MenuItem value="blog">
            <Link as={RouterLink} to="/blog" fontWeight="bold">
              Blog
            </Link>
          </MenuItem> */}
          <MenuItem value="toggleColorMode">
            <ColorModeButton />
          </MenuItem>
        </MenuContent>
      </MenuRoot>

      {/* Desktop */}
      <Flex
        as="nav"
        justifyContent="space-around"
        gap="3"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        <ScrollTo area="intro" fontWeight="bold">
          Intro
        </ScrollTo>
        <ScrollTo area="skills" fontWeight="bold">
          Skills
        </ScrollTo>
        <ScrollTo area="projects" fontWeight="bold">
          Projects
        </ScrollTo>
        <ScrollTo area="about" fontWeight="bold">
          About
        </ScrollTo>
        {/* <Link as={RouterLink} to="/blog" fontWeight="bold">
          Blog
        </Link> */}
        <ColorModeButton />
      </Flex>
    </Box>
  );
}

export default NavBar;
