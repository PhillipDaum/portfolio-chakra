import { useState } from "react";
import { Flex, Link, Box, Heading, Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { ColorModeButton } from "./ui/color-mode";
import { Link as RouterLink } from "react-router-dom"; // why is this different?
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";


// Blog link commented out in both
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handles navigation and scrolling
  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // If already on homepage, just scroll
      scrollToSection(id);
    } else {
      // Navigate home first, then scroll after load
      navigate("/");
      // look into this delay
      setTimeout(() => scrollToSection(id), 100); // Delay ensures page is loaded
    }
  };

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
        <Link paddingRight=".5rem" onClick={() => handleNavClick("intro")}>
          <Heading as="h2">Phil Daum</Heading>
        </Link>
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
            <Link onClick={() => handleNavClick("intro")} fontWeight="bold">
              Intro
            </Link>
          </MenuItem>
          <MenuItem value="skills">
            <Link onClick={() => handleNavClick("skills")} fontWeight="bold">
              Skills
            </Link>
          </MenuItem>
          <MenuItem value="projects">
            <Link onClick={() => handleNavClick("projects")} fontWeight="bold">
              Projects
            </Link>
          </MenuItem>
          <MenuItem value="about">
            <Link onClick={() => handleNavClick("about")} fontWeight="bold">
              About
            </Link>
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
        <Link onClick={() => handleNavClick("intro")} fontWeight="bold">
          Intro
        </Link>
        <Link onClick={() => handleNavClick("skills")} fontWeight="bold">
          Skills
        </Link>
        <Link onClick={() => handleNavClick("projects")} fontWeight="bold">
          Projects
        </Link>
        <Link onClick={() => handleNavClick("about")} fontWeight="bold">
          About
        </Link>
        {/* <Link as={RouterLink} to="/blog" fontWeight="bold">
          Blog
        </Link> */}
        <ColorModeButton />
      </Flex>
    </Box>
  );
}

export default NavBar;
