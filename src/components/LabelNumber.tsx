import { Box, Input, InputProps, Text } from "@chakra-ui/core";
import React from "react";

export const LabelNumber: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Box>
      <Text>{children}</Text>
      <Input {...props} />
    </Box>
  );
};
