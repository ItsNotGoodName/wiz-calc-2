import { Flex, Input, Text, InputProps, Box, Stack } from "@chakra-ui/core";
import React from "react";

export const LabelNumber: React.FC<{ label: string } & InputProps> = ({
  label,
  ...props
}) => {
  return (
    <Box>
      <Text>{label}</Text>
      <Input {...props} />
    </Box>
  );
};
