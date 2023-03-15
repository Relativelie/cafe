import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export enum ButtonColorTypesENUM {
  Green = "GREEN",
  Red = "RED",
  Gray = "GRAY",
}

const bgColors: { [key in ButtonColorTypesENUM]: string } = {
  GREEN: "bg-[#5aa06b]",
  RED: "bg-[#ff0c00]",
  GRAY: "bg-[#808080]",
};

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
  color: ButtonColorTypesENUM;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  color = ButtonColorTypesENUM.Gray,
  leftIcon = undefined,
  rightIcon = undefined,
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        bgColors[color],
        className,
        "h-full w-full rounded-lg hover:shadow-lg hover:opacity-90",
      )}
      onClick={onClick}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Button;
