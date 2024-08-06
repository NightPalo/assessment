import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CustomButton;