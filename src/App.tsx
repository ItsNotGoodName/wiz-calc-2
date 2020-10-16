import { Box, Flex, Stack } from "@chakra-ui/core";
import React from "react";
import { AddCard } from "./components/AddCard";
import { MainCard } from "./components/MainCard";

const App: React.FC = () => {
  return (
    <Flex wrap="wrap" maxW="900px" my="5px" px="5px" mx="auto">
      <Flex w="300px" mr="10px">
        <MainCard />
      </Flex>
      <Flex>
        <Flex w="300px">
          <AddCard />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
