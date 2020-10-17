import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import React from "react";
import { CharacterType } from "../types";
import { CharacterActions } from "./UseCharacter";

type MainCardProps = {
  character: CharacterType;
  dispatch: React.Dispatch<CharacterActions>;
};

export const MainCard: React.FC<MainCardProps> = ({ character, dispatch }) => {
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
          <Input
            ml="auto"
            w="40%"
            value={character.percentModifier}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              dispatch({ type: "change_percent", value: event.target.value });
            }}
          />
        </Flex>
        <Flex>
          <Text my="auto">Flat Damage</Text>
          <Input
            ml="auto"
            w="40%"
            value={character.flatDamage}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              dispatch({ type: "change_flat", value: event.target.value });
            }}
          />
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
          value={character.buffsRaw}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "change_buffs", value: event.target.value })
          }
        ></Textarea>
        <Button mx="auto" w="25%">
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};
