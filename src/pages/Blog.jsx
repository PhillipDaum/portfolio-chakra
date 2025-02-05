import React from 'react';
import { Container, Heading, Text, Box } from '@chakra-ui/react';

const Blog = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center" mt={10}>
        <Heading as="h1" mb={4}>
          Blog
        </Heading>
        <Text fontSize="lg">
          This page is currently under construction. Stay tuned for updates!
        </Text>
      </Box>
    </Container>
  );
};

export default Blog;
