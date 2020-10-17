import { Box, Flex, Input, Stack, Text } from "@chakra-ui/core";
import React from "react";
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
      borderColor="#E2E8F0"
    >
      <Box p="5px" borderBottom="solid 2px" borderColor="#E2E8F0">
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
          <CardOptionMenu />
        </Flex>
      </Box>
      <Stack pb="10px" px="10px" borderBottom="solid 2px" borderColor="#E2E8F0">
        <LabelNumber label="Enchantment" />
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
