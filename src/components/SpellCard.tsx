import { Box, Flex, Input, Text } from "@chakra-ui/core";
import React from "react";
import { CharacterType } from "../types";
import { CardFooter } from "./Card/CardFooter";
import { CardHeader } from "./Card/CardHeader";
import { CardItem } from "./Card/CardItem";
import { CardWrapper } from "./Card/CardWrapper";
import { LabelNumber } from "./LabelNumber";
import { OptionMenu } from "./OptionMenu";
import { useSpell } from "../hooks/UseSpell";

type SpellCardProps = {
  character: CharacterType;
  id: string;
  deleteSpell: (id: string) => void;
};

export const SpellCard: React.FC<SpellCardProps> = ({
  character,
  id,
  deleteSpell,
}) => {
  const [spell, dispatch] = useSpell({ character, id });

  return (
    <CardWrapper>
      <CardHeader p="5px">
        <Flex>
          <Flex>
            <Input
              textAlign="center"
              fontSize="20px"
              mr="5px"
              border="none"
              spellCheck="false"
              value={spell.name}
              onFocus={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.target.select();
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                dispatch({ type: "change_name", name: event.target.value });
              }}
            />
          </Flex>
          <Flex>
            <OptionMenu dispatch={dispatch} deleteSpell={deleteSpell} id={id} />
          </Flex>
        </Flex>
      </CardHeader>
      {spell.enchantment !== undefined ? (
        <CardItem>
          <LabelNumber
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: "change_enchantment",
                value: event.target.value,
              });
            }}
            value={spell.enchantment}
          >
            Enchantment
          </LabelNumber>
        </CardItem>
      ) : null}
      {spell.increment !== undefined ? (
        <CardItem>
          <Flex>
            <Box pr="10px">
              <LabelNumber
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({
                    type: "change_increment",
                    pips: event.target.value,
                  });
                }}
                value={spell.increment.pips}
              >
                Pips
              </LabelNumber>
            </Box>
            <LabelNumber
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: "change_increment",
                  base: event.target.value,
                });
              }}
              value={spell.increment.base}
            >
              Base
            </LabelNumber>
          </Flex>
        </CardItem>
      ) : null}
      <CardFooter>
        {spell.bases.map((value, index) => {
          return (
            <Flex key={index}>
              <Box w="45%">
                <Input
                  value={value}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    event.preventDefault();
                    dispatch({
                      type: "change_base",
                      index,
                      value: event.target.value,
                    });
                  }}
                />
              </Box>
              <Flex ml="auto" w="50%">
                <Text
                  flexWrap="wrap"
                  wordBreak="break-word"
                  my="auto"
                  ml="auto"
                  fontSize="18px"
                  fontWeight="bold"
                >
                  {spell.damages[index].toLocaleString("en", {
                    useGrouping: true,
                  })}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </CardFooter>
    </CardWrapper>
  );
};
