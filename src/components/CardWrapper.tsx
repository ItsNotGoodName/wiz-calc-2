import { Stack, StackProps } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../constants";
type CardWrapperProps = {} & StackProps;

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      boxShadow="md"
      border={BORDER}
      borderRadius="10px"
      w="100%"
      borderColor={BORDER_COLOR}
      {...props}
    >
      {children}
    </Stack>
  );
};
