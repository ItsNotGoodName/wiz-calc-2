import { Box, Flex, Heading, IconButton } from "@chakra-ui/core";
import React, { useState } from "react";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { useCharacter } from "./components/UseCharacter";
import { v4 } from "uuid";
import { BORDER_COLOR, MAX_SPELLS } from "./constants";

const App: React.FC = () => {
  const [character, setCharacter] = useCharacter();

  const [spells, setSpells] = useState<string[]>([v4()]);

  return (
    <Box maxW="900px" mx="auto">
      <Box
        m="10px"
        py="10px"
        boxShadow="md"
        border="solid 2px"
        borderRadius="10px"
        borderColor={BORDER_COLOR}
      >
        <Heading color="gray.900" textAlign="center" size="xl">
          Wiz Calc 2
        </Heading>
      </Box>
      <Box>
        <Flex float="left" minW="200px" w="200px" mx="10px">
          <MainCard character={character} dispatch={setCharacter} />
        </Flex>
        <Flex wrap="wrap">
          {spells.map((value, index) => (
            <Flex key={index} mb="auto" pb="10px" w="233px" mr="10px">
              <SpellCard character={character} />
            </Flex>
          ))}
          <Flex w="233px" mr="10px">
            {spells.length < MAX_SPELLS ? (
              <IconButton
                variantColor="blue"
                boxShadow="md"
                mx="auto"
                mt="25px"
                aria-label="Add Spellcard"
                icon="add"
                onClick={() => {
                  const newSpells = [...spells];
                  newSpells.push(v4());
                  setSpells(newSpells);
                }}
              />
            ) : null}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default App;
