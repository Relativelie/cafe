import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { useTheme } from 'theme/themeProvider';

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
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
  className?: string;
  size?: ButtonSizeENUM;
}

const AppButton: React.FC<ButtonProps> = ({
  disabled = false,
  leftIcon = undefined,
  rightIcon = undefined,
  onClick,
  children,
  className = '',
  size = ButtonSizeENUM.md,
}) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        borderColor: theme.colors.lightBrand,
      }}
      className={clsx(
        sizes[size],
        className,
        theme.hoverBgColors.darkBrand,
        'h-min border-2 rounded-lg hover:shadow-lg',
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
