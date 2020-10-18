import { Stack, StackProps } from "@chakra-ui/core";
import React from "react";
import { BORDER, BORDER_COLOR } from "../../constants";
type CardWrapperProps = {} & StackProps;

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      spacing="5px"
      boxShadow="md"
      border={BORDER}
      borderRadius="10px"
      borderColor={BORDER_COLOR}
      {...props}
    >
      {children}
    </Stack>
  );
};
