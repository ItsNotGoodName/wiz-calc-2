import { Box, Flex, Heading, IconButton } from "@chakra-ui/core";
import React, { useContext } from "react";
import { CardWrapper } from "./components/Card/CardWrapper";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { MAX_SPELLS } from "./constants";
import { SpellsContext } from "./contexts/SpellsContext";

const App: React.FC = () => {
  const { spells, dispatch } = useContext(SpellsContext);

  const spellCards = spells.map((value, index) => {
    return (
      <Flex key={value.id} mb="auto" pb="20px" w="206px" mr="20px">
        <SpellCard spell={value} index={index} />
      </Flex>
    );
  });

  return (
    <Box minW="430px" maxW="900px" pl="20px" mx="auto">
      <CardWrapper py="10px" mr="20px" my="20px">
        <Heading color="gray.900" textAlign="center" size="xl">
          Wiz Calculator 2
        </Heading>
      </CardWrapper>
      <Box>
        <Box float="left" minW="181px" w="181px" mr="20px">
          <Box mb="20px">
            <MainCard />
          </Box>
        </Box>
        <Flex wrap="wrap">
          {spellCards}
          <Flex minH="100px" pb="20px" w="216px" mr="10px">
            {spells.length < MAX_SPELLS ? (
              <IconButton
                variantColor="blue"
                boxShadow="md"
                m="auto"
                aria-label="Add Spellcard"
                icon="add"
                onClick={() => {
                  dispatch({ type: "add_spell" });
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
