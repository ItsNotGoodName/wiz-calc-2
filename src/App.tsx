import { Box, Flex, IconButton } from "@chakra-ui/core";
import React, { useState } from "react";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { useCharacter } from "./components/UseCharacter";
import { v4 } from "uuid";

const App: React.FC = () => {
  const [character, setCharacter] = useCharacter();

  const [spells, setSpells] = useState<string[]>([v4()]);

  return (
    <Box maxW="900px" mt="5px" mx="auto">
      <Flex float="left" minW="250px" w="250px" mx="10px">
        <MainCard character={character} dispatch={setCharacter} />
      </Flex>
      <Flex wrap="wrap">
        {spells.map((value, index) => (
          <Flex key={index} mb="auto" pb="10px" w="250px" mr="10px">
            <SpellCard character={character} />
          </Flex>
        ))}
        <Flex minH="250px" w="250px" mr="10px">
          <IconButton
            variantColor="blue"
            m="auto"
            aria-label="Add Spellcard"
            icon="add"
            onClick={() => {
              const newSpells = [...spells];
              newSpells.push(v4());
              setSpells(newSpells);
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
