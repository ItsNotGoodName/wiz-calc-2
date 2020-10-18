import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpellActions } from "../hooks/UseSpell";

type OptionMenu = {
  dispatch: React.Dispatch<SpellActions>;
  id: string;
  deleteSpell: (id: string) => void;
};

export const OptionMenu: React.FC<OptionMenu> = ({
  dispatch,
  id,
  deleteSpell,
}) => {
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
        <MenuItem onClick={() => deleteSpell(id)}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
