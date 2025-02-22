import { Container, Heading, Text, Box } from '@chakra-ui/react';

// import the markdown thing. 
// at first this just has one blog post,
// then a short list at the top that will render a few
// later maybe cards in a list and a link to a new page


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
