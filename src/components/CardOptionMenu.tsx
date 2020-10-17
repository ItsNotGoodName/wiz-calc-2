import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type CardOptionMenu = {};

export const CardOptionMenu: React.FC<CardOptionMenu> = () => {
  return (
    <Menu>
      <MenuButton>
        <BsThreeDotsVertical aria-label="spell-options" size="26px" />
      </MenuButton>
      <MenuList>
        <MenuItem>Toggle Enchantment</MenuItem>
        <MenuItem>Toggle Increment</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
