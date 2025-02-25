import { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Typed from "typed.js";
import typeEffectText from "../data/typeEffectText";
import { SlArrowDown } from "react-icons/sl";

function Intro() {
  const verbRef = useRef(null);
  const techRef = useRef(null);
  let typedVerb, typedTech;

  const typeAnimation = (index) => {
    if (index >= typeEffectText.length) index = 0;
    typedVerb = new Typed(verbRef.current, {
      strings: [typeEffectText[index].verbPhrase],
      typeSpeed: 30,
      showCursor: false,
      onComplete: () => {
        typedTech = new Typed(techRef.current, {
          strings: [typeEffectText[index].techPhrase],
          typeSpeed: 40,
          showCursor: false,
          onComplete: () => {
            setTimeout(() => {
              typedVerb.destroy();
              typedTech.destroy();
              index++;
              typeAnimation(index);
            }, 1000);
          },
        });
      },
    });
  };
  // ask teachers about this implementation
  useEffect(() => typeAnimation(0), []);

  // probably switch to a grid for more control
  // longest sentence set - downsides to this
  // flex-basis 100%, add margins on sides, won't jam in sides. 
  return (
    <Box>
      <Flex
        height="calc(100vh - 3rem)"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        direction={{ base: "column", md: "row" }}
      >
        <Grid templateColumns={{ base: "1fr", md: "2fr 5fr" }} gap="2rem">
          <GridItem>
            <Stack>
              {/* maybe make this one h1 that is split */}
              <Heading
                as="h1"
                lineHeight="1.18"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {/* I'm{" "} */}
                <Box as="span" color="fg.info">
                  Phil
                </Box>
                , <br /> the developer.
              </Heading>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                ref={verbRef}
              >
                {"  "}
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                ref={techRef}
              >
                {" "}
              </Heading>
            </Stack>
          </GridItem>

          <GridItem colSpan={{ base: "1", md: "2" }}>
            <Flex justifyContent="center">
              <Button variant="outline" colorPalette="teal">
                <Flex direction="column" alignItems="center">
                  <Heading as="h3">More</Heading>
                  <SlArrowDown />
                </Flex>
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      {/* button here to More about phil */}
    </Box>
  );
}

export default Intro;
