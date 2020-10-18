import { Box, Flex, Input, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { BORDER_COLOR } from "../constants";
import { CharacterType } from "../types";
import { CardOptionMenu } from "./CardOptionMenu";
import { LabelNumber } from "./LabelNumber";
import { useSpell } from "./UseSpell";

type SpellCardProps = {
  character: CharacterType;
};

export const SpellCard: React.FC<SpellCardProps> = ({ character }) => {
  const [spell, dispatch] = useSpell({ character });

  return (
    <Stack
      w="100%"
      border="solid 2px"
      borderRadius="10px"
      borderColor={BORDER_COLOR}
    >
      <Box p="5px" borderBottom="solid 2px" borderColor={BORDER_COLOR}>
        <Flex>
          <Input
            textAlign="center"
            fontSize="20px"
            mr="5px"
            border="none"
            spellCheck="false"
            value={spell.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              dispatch({ type: "change_name", name: event.target.value });
            }}
          />
          <CardOptionMenu dispatch={dispatch} />
        </Flex>
      </Box>
      <Stack>
        {spell.enchantment !== undefined ? (
          <Box
            px="10px"
            pb="10px"
            borderBottom="solid 2px"
            borderColor={BORDER_COLOR}
          >
            <LabelNumber
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: "change_enchantment",
                  value: event.target.value,
                });
              }}
              value={spell.enchantment}
              label="Enchantment"
            />
          </Box>
        ) : null}
        {spell.increment !== undefined ? (
          <Stack
            px="10px"
            pb="10px"
            borderBottom="solid 2px"
            borderColor={BORDER_COLOR}
          >
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
                  label="Pips"
                />
              </Box>
              <LabelNumber
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({
                    type: "change_increment",
                    base: event.target.value,
                  });
                }}
                value={spell.increment.base}
                label="Increment"
              />
            </Flex>
          </Stack>
        ) : null}
      </Stack>
      <Stack px="10px" pb="10px">
        {spell.bases.map((value, index) => {
          return (
            <Flex key={index}>
              <Box w="50%">
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
              <Flex w="50%">
                <Text m="auto" fontSize="20px" fontWeight="bold">
                  {spell.damages[index]}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};
