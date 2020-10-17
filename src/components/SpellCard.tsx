import {
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { CharacterType } from "../types";
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
      <Box pt="5px" borderBottom="solid 2px" borderColor="#E2E8F0">
        <Input
          textAlign="center"
          fontSize="20px"
          w="95%"
          mx="auto"
          border="none"
          spellCheck="false"
          mb="5px"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            dispatch({ type: "change_name", name: event.target.value });
          }}
          defaultValue={spell.name}
        ></Input>
      </Box>
      <Stack px="10px" borderBottom="solid 2px" borderColor="#E2E8F0"></Stack>
      <Stack px="10px" pb="10px">
        {spell.bases.map((value, index) => {
          return (
            <Flex key={index}>
              <Box w="50%">
                <NumberInput value={value} defaultValue={value}>
                  <NumberInputField
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      event.preventDefault();
                      dispatch({
                        type: "change_base",
                        index,
                        value: event.target.value,
                      });
                    }}
                  />
                </NumberInput>
              </Box>
              <Flex w="50%">
                <Text m="auto" fontSize="20px" fontWeight="bold">
                  {spell.finalDamage[index]}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};
