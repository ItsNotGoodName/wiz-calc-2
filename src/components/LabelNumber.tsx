import { Box, Input, InputProps, Text } from "@chakra-ui/core";
import React from "react";

export const LabelNumber: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Box>
      <Text>{children}</Text>
      <Input
        type="number"
        onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
          event.target.select();
        }}
        {...props}
      ></Input>
    </Box>
  );
};
