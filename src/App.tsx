import { Box, Flex, Heading, IconButton } from "@chakra-ui/core";
import React, { useContext } from "react";
import { CardWrapper } from "./components/Card/CardWrapper";
import { MainCard } from "./components/MainCard";
import { SpellCard } from "./components/SpellCard";
import { ToolbarCard } from "./components/ToolBarCard";
import { MAX_SPELLS } from "./constants";
import { SpellsContext } from "./contexts/SpellsContext";
import { SpellType } from "./types";

const App: React.FC = () => {
  const { spells, dispatch } = useContext(SpellsContext);

  const spellCards = spells.map((value: SpellType, index: number) => {
    return (
      <Flex key={value.id} mb="auto" pb="20px" w="206px" mr="20px">
        <SpellCard index={index} />
      </Flex>
    );
  });

  return (
    <Box maxW="900px" pl="20px" mx="auto">
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
          <ToolbarCard />
        </Box>
        <Flex wrap="wrap">
          {spellCards}
          <Flex pb="20px" w="216px" mr="10px">
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
