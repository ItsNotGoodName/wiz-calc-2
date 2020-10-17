import { Box, Flex, Stack } from "@chakra-ui/core";
import React from "react";
import { AddCard } from "./components/AddCard";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { useCharacter } from "./components/UseCharacter";

const App: React.FC = () => {
  const [character, setCharacter] = useCharacter();
  return (
    <Box maxW="900px" mt="5px" mx="auto">
      <Flex float="left" minW="250px" w="250px" mr="10px">
        <MainCard />
      </Flex>
      <Flex wrap="wrap">
        <Flex w="250px">
          <SpellCard character={character} />
        </Flex>
        <Flex w="250px">
          <AddCard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
