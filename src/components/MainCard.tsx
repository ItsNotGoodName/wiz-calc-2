import { Box, Button, Stack, Textarea } from "@chakra-ui/core";
import React from "react";
import { CharacterType } from "../types";
import { LabelNumber } from "./LabelNumber";
import { CharacterActions } from "./UseCharacter";

type MainCardProps = {
  character: CharacterType;
  dispatch: React.Dispatch<CharacterActions>;
};

export const MainCard: React.FC<MainCardProps> = ({ character, dispatch }) => {
  return (
    <Stack border="solid 2px" borderRadius="10px" borderColor="#E2E8F0">
      <Box
        p="10px"
        borderBottom="solid 2px"
        borderColor="#E2E8F0"
        textAlign="center"
        fontSize="20px"
      >
        Character Stats
      </Box>
      <Stack pt="5px" px="10px">
        <LabelNumber
          label="Percent Modifier"
          value={character.percentModifier}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({ type: "change_percent", value: event.target.value });
          }}
        />
        <LabelNumber
          label="Flat Damage"
          value={character.flatDamage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({ type: "change_flat", value: event.target.value });
          }}
        />
      </Stack>
      <Box
        py="10px"
        borderBottom="solid 2px"
        borderTop="solid 2px"
        borderColor="#E2E8F0"
        fontSize="20px"
        textAlign="center"
        mb="100px"
      >
        Buffs and Debuffs
      </Box>
      <Stack px="10px" pb="10px" pt="5px">
        <Textarea
          height="200px"
          resize="vertical"
          placeholder="[percent] [name]"
          value={character.buffsRaw}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "change_buffs", value: event.target.value });
          }}
        />
        <Button
          onClick={() => dispatch({ type: "change_buffs", value: "" })}
          mx="auto"
          mt="5px"
          w="40%"
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};
