import { Flex } from '@chakra-ui/react';
import { DiHtml5, DiReact, DiJavascript1, DiNodejsSmall } from 'react-icons/di';

function Skills() {
  return (
    <Flex justifyContent="space-around" alignItems="center" p={4}>
      <DiHtml5 size={50} color="#E34F26" />
      <DiReact size={50} color="#61DAFB" />
      <DiJavascript1 size={50} color="#F7DF1E" />
      <DiNodejsSmall size={50} color="#339933" />
      {/* Add more icons as needed */}
    </Flex>
  );
}

export default Skills;
