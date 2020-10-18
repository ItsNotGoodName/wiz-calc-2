import { Button } from "@chakra-ui/core";
import React from "react";
import { CardWrapper } from "./Card/CardWrapper";
type ToolbarCardProps = {};

export const ToolbarCard: React.FC<ToolbarCardProps> = () => {
  return (
    <CardWrapper>
      <Button>Save</Button>
    </CardWrapper>
  );
};
