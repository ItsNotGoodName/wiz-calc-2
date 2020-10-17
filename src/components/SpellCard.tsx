import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";

type SpellCardProps = {};

export const SpellCard: React.FC<SpellCardProps> = () => {
  return (
    <Stack
      w="100%"
      border="solid 2px"
      borderRadius="10px"
      borderColor="#E2E8F0"
    >
      <Box
        pt="10px"
        borderBottom="solid 2px"
        borderColor="#E2E8F0"
        textAlign="center"
        fontSize="20px"
      >
        SpellName
      </Box>
      <Stack px="10px" borderBottom="solid 2px" borderColor="#E2E8F0"></Stack>
      <Stack px="10px" pb="10px">
        <Flex>
          <Box w="50%">
            <NumberInput defaultValue={0}>
              <NumberInputField />
            </NumberInput>
          </Box>
          <Flex w="50%">
            <Text m="auto" fontSize="20px" fontWeight="bold">
              100
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};
