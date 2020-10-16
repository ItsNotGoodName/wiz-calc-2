import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/core";
import React from "react";

type AddCardProps = {};

export const AddCard: React.FC<AddCardProps> = () => {
  return (
    <Flex mx="auto">
      <Menu>
        {
          // @ts-ignore
          <MenuButton as={Button} rightIcon="chevron-down">
            Add Spellcard
          </MenuButton>
        }
        <MenuList>
          <MenuItem>Normal Spellcard</MenuItem>
          <MenuItem>Increment Spellcard</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
