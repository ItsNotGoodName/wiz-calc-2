import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpellActions } from "./UseSpell";

type CardOptionMenu = {
  dispatch: React.Dispatch<SpellActions>;
};

export const CardOptionMenu: React.FC<CardOptionMenu> = ({ dispatch }) => {
  return (
    <Menu>
      <MenuButton>
        <BsThreeDotsVertical aria-label="spell-options" size="26px" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => dispatch({ type: "toggle_enchantment" })}>
          Toggle Enchantment
        </MenuItem>
        <MenuItem>Toggle Increment</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};