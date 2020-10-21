import { Stack, StackProps } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../../constants";

export const CardItem: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <Stack
      spacing="5px"
      px="10px"
      pb="10px"
      mb="5px"
      borderBottom={BORDER}
      borderColor={BORDER_COLOR}
      {...props}
    >
      {children}
    </Stack>
  );
};
