import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react';

export enum ButtonSizeENUM {
  sm = 'SM',
  md = 'MD',
  lg = 'LG',
  full = 'FULL',
}

const sizes: { [key in ButtonSizeENUM]: string } = {
  SM: 'w-48 h-9',
  MD: 'w-64 h-9',
  LG: 'w-80 h-9',
  FULL: 'h-full w-full',
};

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  size?: ButtonSizeENUM;
}

const AppButton: React.FC<ButtonProps> = ({
  disabled = false,
  leftIcon = undefined,
  rightIcon = undefined,
  onClick,
  children,
  className = '',
  type = 'button',
  size = ButtonSizeENUM.md,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        sizes[size],
        className,
        'h-min border-green-300 border-2 rounded-lg hover:shadow-lg hover:bg-green-300',
      )}
      onClick={onClick}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default AppButton;
