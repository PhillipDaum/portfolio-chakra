import { Box } from '@chakra-ui/react';
import Intro from '../components/Intro.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';

function Home() {
  return (
    <Box paddingLeft={{sm:"0", xl:"5rem", xxl:"10rem"}} paddingRight={{sm:"0", xl:"5rem", xxl:"10rem"}}>
      <Box paddingTop="3rem" id="intro"><Intro /></Box>
      <Box paddingTop="3rem" id="skills" paddingBottom="1rem"><Skills /></Box>
      <Box paddingTop="3rem" id="projects"><Projects /></Box>
      <Box paddingTop="3rem" paddingBottom="8rem" id="about"><About /></Box>
    </Box>
  );
}

export default Home;
