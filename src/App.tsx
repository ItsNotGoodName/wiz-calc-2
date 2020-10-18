import { Box, Flex, Heading, IconButton } from "@chakra-ui/core";
import React, { useState } from "react";
import { v4 } from "uuid";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { useCharacter } from "./components/UseCharacter";
import { BORDER, BORDER_COLOR, MAX_SPELLS } from "./constants";

const App: React.FC = () => {
  const [character, setCharacter] = useCharacter();

  const [spells, setSpells] = useState<string[]>([v4()]);

  const deleteSpell = (id: string) => {
    const index = spells.indexOf(id);
    if (index !== -1) {
      const newSpells = [];
      for (let i = 0; i < spells.length; i++) {
        if (index !== i) {
          newSpells.push(spells[i]);
        }
      }

      setSpells(newSpells);
    }
  };

  const spellCards = spells.map((value) => {
    return (
      <Flex key={value} mb="auto" pb="20px" w="206px" mr="20px">
        <SpellCard id={value} deleteSpell={deleteSpell} character={character} />
      </Flex>
    );
  });

  return (
    <Box maxW="900px" pl="20px" mx="auto">
      <Box
        my="20px"
        mr="20px"
        py="10px"
        boxShadow="md"
        border={BORDER}
        borderRadius="10px"
        borderColor={BORDER_COLOR}
      >
        <Heading color="gray.900" textAlign="center" size="xl">
          Wiz Calculator 2
        </Heading>
      </Box>
      <Box>
        <Flex float="left" minW="181px" w="181px" mr="20px">
          <MainCard character={character} dispatch={setCharacter} />
        </Flex>
        <Flex wrap="wrap">
          {spellCards}
          <Flex w="206px" mr="10px">
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
