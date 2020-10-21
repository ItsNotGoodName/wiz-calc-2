import {
  Box,
  Input,
  InputProps,
  NumberIncrementStepper,
  Text,
} from "@chakra-ui/core";
import React from "react";

export const LabelNumber: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Box>
      <Text>{children}</Text>
      <Input type="number" {...props}></Input>
    </Box>
  );
};
