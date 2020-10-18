import { Button, Text, Textarea } from "@chakra-ui/core";
import React from "react";
import { CharacterType } from "../types";
import { CardFooter } from "./Card/CardFooter";
import { CardHeader } from "./Card/CardHeader";
import { CardItem } from "./Card/CardItem";
import { CardWrapper } from "./Card/CardWrapper";
import { LabelNumber } from "./LabelNumber";
import { CharacterActions } from "./UseCharacter";

type MainCardProps = {
  character: CharacterType;
  dispatch: React.Dispatch<CharacterActions>;
};

export const MainCard: React.FC<MainCardProps> = ({ character, dispatch }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <Text textAlign="center" fontSize="20px">
          Character Stats
        </Text>
      </CardHeader>
      <CardItem>
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
      </CardItem>
      <CardItem>
        <Text fontSize="20px" textAlign="center">
          + / - Charms
        </Text>
      </CardItem>
      <CardFooter>
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
      </CardFooter>
    </CardWrapper>
  );
};
