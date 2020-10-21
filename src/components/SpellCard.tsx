import { Box, Button, Flex, IconButton, Input, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useSpell } from "../hooks/UseSpell";
import { SpellType } from "../types";
import { CardFooter } from "./Card/CardFooter";
import { CardHeader } from "./Card/CardHeader";
import { CardItem } from "./Card/CardItem";
import { CardWrapper } from "./Card/CardWrapper";
import { CloseButton } from "./CloseButton";
import { LabelNumber } from "./LabelNumber";

type SpellCardProps = {
  spell: SpellType;
  index: number;
};

export const SpellCard: React.FC<SpellCardProps> = ({ spell, index }) => {
  const dispatch = useSpell(spell, index);
  const [editmode, setEditmode] = useState(false);

  return (
    <CardWrapper>
      <CardHeader p="5px">
        <Flex>
          <Flex>
            <IconButton
              aria-label="edit"
              variant="ghost"
              isActive={editmode}
              fontSize="24px"
              title="Click for edit mode or Shift+Click to delete spell"
              onClick={(event: React.MouseEvent<any, MouseEvent>) => {
                if (event.shiftKey) {
                  dispatch({ type: "delete_spell" });
                } else {
                  setEditmode(!editmode);
                }
              }}
              mr="5px"
              icon={AiOutlineEdit}
            />
          </Flex>
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
            {editmode && (
              <CloseButton
                variantColor="red"
                aria-label="close"
                title="Delete spell"
                onClick={() => dispatch({ type: "delete_spell" })}
              />
            )}
          </Flex>
        </Flex>
      </CardHeader>
      {editmode && (
        <CardItem mt="5px" spacing="8px" isInline={true}>
          <Button
            onClick={() => dispatch({ type: "add_base" })}
            isActive={spell.enchantment !== undefined}
            title="Add base to spell"
          >
            B
          </Button>
          <Button
            onClick={() => dispatch({ type: "toggle_enchantment" })}
            isActive={spell.enchantment !== undefined}
            title="Toggle enchantment"
          >
            E
          </Button>
          <Button
            onClick={() => dispatch({ type: "toggle_increment" })}
            isActive={spell.increment !== undefined}
            title="Toggle increment"
          >
            I
          </Button>
        </CardItem>
      )}
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
              {editmode && (
                <CloseButton
                  variant="ghost"
                  mr="10px"
                  aria-label="close"
                  title="Delete base"
                  onClick={() => dispatch({ type: "delete_base", index })}
                />
              )}
              <Flex w="50%">
                <LabelNumber
                  value={value}
                  title="Base damage"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    event.preventDefault();
                    dispatch({
                      type: "change_base",
                      index,
                      value: event.target.value,
                    });
                  }}
                ></LabelNumber>
              </Flex>
              <Flex ml="auto">
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
