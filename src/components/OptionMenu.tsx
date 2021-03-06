import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpellActions } from "../reducers/spellReducer";

type OptionMenu = {
  dispatch: React.Dispatch<SpellActions>;
};

export const OptionMenu: React.FC<OptionMenu> = ({ dispatch }) => {
  return (
    <Menu>
      <MenuButton>
        <BsThreeDotsVertical aria-label="spell-options" size="24px" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => dispatch({ type: "add_base" })}>
          Add Base
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: "toggle_enchantment" })}>
          Toggle Enchantment
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: "toggle_increment" })}>
          Toggle Increment
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: "delete_spell" })}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
