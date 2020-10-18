import { Box, Flex, Input, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../constants";
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
      border={BORDER}
      borderRadius="10px"
      boxShadow="md"
      borderColor={BORDER_COLOR}
    >
      <Box p="5px" borderBottom={BORDER} borderColor={BORDER_COLOR}>
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
          <CardOptionMenu dispatch={dispatch} />
        </Flex>
      </Box>
      <Stack>
        {spell.enchantment !== undefined ? (
          <Box
            px="10px"
            pb="10px"
            borderBottom={BORDER}
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
            borderBottom={BORDER}
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
      </Stack>
    </Stack>
  );
};
