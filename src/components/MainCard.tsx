import { Box, Button, Stack, Textarea } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../constants";
import { CharacterType } from "../types";
import { CardWrapper } from "./CardWrapper";
import { LabelNumber } from "./LabelNumber";
import { CharacterActions } from "./UseCharacter";

type MainCardProps = {
  character: CharacterType;
  dispatch: React.Dispatch<CharacterActions>;
};

export const MainCard: React.FC<MainCardProps> = ({ character, dispatch }) => {
  return (
    <CardWrapper>
      <Box
        p="10px"
        borderBottom={BORDER}
        borderColor={BORDER_COLOR}
        textAlign="center"
        fontSize="20px"
      >
        Character Stats
      </Box>
      <Stack px="10px" spacing="5px" pb="5px">
        <LabelNumber
          value={character.percentModifier}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({ type: "change_percent", value: event.target.value });
          }}
        >
          Percent Modifier
        </LabelNumber>
        <LabelNumber
          value={character.flatDamage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({ type: "change_flat", value: event.target.value });
          }}
        >
          Flat Damage
        </LabelNumber>
      </Stack>
      <Box
        p="10px"
        borderBottom={BORDER}
        borderTop={BORDER}
        borderColor={BORDER_COLOR}
        fontSize="20px"
        textAlign="center"
      >
        + / - Charms
      </Box>
      <Stack spacing="5px" py="5px" px="10px">
        <Textarea
          height="212px"
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
          w="40%"
        >
          Clear
        </Button>
      </Stack>
    </CardWrapper>
  );
};
