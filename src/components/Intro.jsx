import { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Typed from "typed.js";
import typeEffectText from "../data/typeEffectText";
import { SlArrowDown } from "react-icons/sl";

function Intro() {
  const typedTextRef = useRef(null);
  let typedText;

  {
    /* Version 2 can have the color*/
  }
  const typeAnimation = (index) => {
    if (index >= typeEffectText.length) index = 0;
    typedText = new Typed(typedTextRef.current, {
      strings: [
        `${typeEffectText[index].verbPhrase} ${typeEffectText[index].techPhrase}.`,
      ],
      typeSpeed: 40,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          typedText.destroy();
          index++;
          typeAnimation(index);
        }, 2000);
      },
    });
  };
  // ask teachers about this implementation
  useEffect(() => typeAnimation(0), []);

  return (
    <Box>
      <Flex
        height="calc(100vh - 3rem)"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        direction="column"
      >
        <Heading
          as="h1"
          lineHeight="1.18"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          <Box as="span" color="fg.info">
            Phil
          </Box>
          , the developer,
        </Heading>

        {/* now this one deletes after each! how did I fix that before? */}
        <Heading
          textAlign="center"
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          ref={typedTextRef}
          minHeight="2rem"
        >
          {"  "}
          {/* for version 2 add span with color set here */}
        </Heading>

        {/* maybe work on padding */}
        {/* add hover state */}
        <Button
          variant="outline"
          borderColor="border.info"
          background="bg.muted"
          _hover={{backgroundColor:"bg"}}
        >
          <Flex direction="column" alignItems="center">
            <Text fontSize="xl">Learn More</Text>
            <SlArrowDown />
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
}

export default Intro;
