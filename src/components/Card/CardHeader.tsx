import { Stack, StackProps } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../../constants";
type CardHeader = {} & StackProps;

export const CardHeader: React.FC<CardHeader> = ({ children, ...props }) => {
  return (
    <Stack
      p="10px"
      borderBottom={BORDER}
      borderColor={BORDER_COLOR}
      spacing="10px"
      {...props}
    >
      {children}
    </Stack>
  );
};
