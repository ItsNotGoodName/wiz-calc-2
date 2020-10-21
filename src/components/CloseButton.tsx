import { IconButton, IconButtonProps } from "@chakra-ui/core";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const CloseButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return <IconButton {...props} fontSize="24px" icon={AiOutlineClose} />;
};
