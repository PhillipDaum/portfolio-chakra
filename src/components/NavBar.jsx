import { Flex, Link, Box, Heading, Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { ColorModeButton } from "./ui/color-mode";
import { Link as RouterLink } from "react-router-dom"; // why is this different?
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// FaTimes doesn't render, do I care?
// Add linkedin and Github prolly (maybe)

// A sticky Chakra Navbar that is a hamburger menu and scrolls from one item to another
// maybe change the base to smaller? - or just the breakpoint where it goes to the hamburger
// the menu appears to be a slightly different hue than the navbar and it overlaps it by a several pixels

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

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
      bg="bg.muted"
      position="fixed"
      width="100%"
      // zIndex={10}
      display="flex"
      height="3rem"
      justifyContent="space-between"
      paddingLeft="3"
      paddingRight="3"
      paddingTop="2"
    >
      <Heading as="h2">Phil Daum</Heading>

      {/* Mobile */}
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            display={{ base: "block", md: "none" }}
          >
            <FaBars />
          </Button>

          {/* <Button >
            Open
          </Button> */}
        </MenuTrigger>
        <MenuContent>
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
          <MenuItem value="blog">
            <Link as={RouterLink} to="/blog" fontWeight="bold">
              Blog
            </Link>
          </MenuItem>
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
        <Link as={RouterLink} to="/blog" fontWeight="bold">
          Blog
        </Link>
        <ColorModeButton />
      </Flex>
    </Box>
  );
}

export default NavBar;
