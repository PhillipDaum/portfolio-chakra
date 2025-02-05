import { Box } from '@chakra-ui/react';

const sections = ['intro', 'skills', 'projects', 'about'];

function Home() {
  return (
    <Box height="100vh">
      {sections.map((section) => (
        <Box key={section} height="100vh" id={section}>
          {/* Render content based on section */}
          <h2>{section}</h2>
        </Box>
      ))}
    </Box>
  );
}

export default Home;
