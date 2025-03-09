import { Box } from '@chakra-ui/react';
import Intro from '../components/Intro.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';

function Home() {
  return (
    <Box paddingTop="3rem" paddingLeft={{sm:"0", xl:"5rem", xxl:"10rem"}} paddingRight={{sm:"0", xl:"5rem", xxl:"10rem"}}>
      <Box id="intro"><Intro /></Box>
      <Box id="skills" paddingBottom="5rem"><Skills /></Box>
      <Box id="projects"><Projects /></Box>
      <Box id="about"><About /></Box>
    </Box>
  );
}

export default Home;
