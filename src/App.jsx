import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <NavBar />
      <Box background="bg.muted">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
