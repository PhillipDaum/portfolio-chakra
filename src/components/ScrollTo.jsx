import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function ScrollTo({ children, area }) {
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
        setTimeout(() => scrollToSection(id), 100);
      }
    };

  return (
    <Box onClick={() => handleNavClick(area)}
        cursor="pointer"
    >
        {children}
        </Box>
  );
}

export default ScrollTo;
