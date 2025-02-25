import { Box } from '@chakra-ui/react';
import Intro from '../components/intro';
import Skills from '../components/Skills';
import About from '../components/about';

function Home() {
  return (
    <Box paddingTop="3rem" >
      {/* add component pages here */}
      <Intro />
      <Skills />
      <About />
    </Box>
  );
}

export default Home;
