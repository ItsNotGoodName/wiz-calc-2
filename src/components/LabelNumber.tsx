import { Flex, Input, Text, InputProps } from "@chakra-ui/core";
import React from "react";

export const LabelNumber: React.FC<{ label: string } & InputProps> = ({
  label,
  ...props
}) => {
  return (
    <Flex>
      <Text my="auto">{label}</Text>
      <Input {...props} ml="auto" w="40%" />
    </Flex>
  );
};
