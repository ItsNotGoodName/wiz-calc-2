import {
  Box,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import React from "react";
import { useSpell } from "./UseSpell";

type MainCardProps = {};

export const MainCard: React.FC<MainCardProps> = () => {
  const [spell, setSpell] = useSpell();

  return (
    <Stack border="solid 2px" borderRadius="10px" borderColor="#E2E8F0">
      <Box
        py="10px"
        borderBottom="solid 2px"
        borderColor="#E2E8F0"
        textAlign="center"
        fontSize="24px"
      >
        Character Stats
      </Box>
      <Stack px="10px">
        <Flex>
          <Text my="auto">Percent Modifier</Text>
          <NumberInput ml="auto" w="40%" defaultValue={0}>
            <NumberInputField />
          </NumberInput>
        </Flex>
        <Flex>
          <Text my="auto">Flat Damage</Text>
          <NumberInput ml="auto" w="40%" defaultValue={0}>
            <NumberInputField />
          </NumberInput>
        </Flex>
      </Stack>
      <Box
        py="10px"
        borderBottom="solid 2px"
        borderTop="solid 2px"
        borderColor="#E2E8F0"
        fontSize="20px"
        textAlign="center"
      >
        Buffs and Debuffs
      </Box>
      <Stack px="10px" pb="10px">
        <Textarea
          height="200px"
          resize="vertical"
          placeholder="[percent] [name]"
        ></Textarea>
        <Button mx="auto" w="25%">
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};
