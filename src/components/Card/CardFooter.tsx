import { Box, BoxProps, Stack, StackProps } from "@chakra-ui/core";
import React from "react";
type CardFooter = {} & StackProps;

export const CardFooter: React.FC<CardFooter> = ({ children, ...props }) => {
  return (
    <Stack spacing="10px" px="10px" pb="10px" pt="5px" {...props}>
      {children}
    </Stack>
  );
};
