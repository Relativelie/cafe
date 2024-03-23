import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

export enum ButtonSize {
  sm = 'SM',
  md = 'MD',
  lg = 'LG',
  full = 'FULL',
}

const sizes: { [key in ButtonSize]: string } = {
  SM: 'w-48 h-9',
  MD: 'w-64 h-9',
  LG: 'w-80 h-9',
  FULL: 'h-full w-full',
};

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  size = ButtonSize.md,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <button
      disabled={disabled}
      style={{
        borderColor: theme.colors.lightBrand,
      }}
      className={clsx(
        sizes[size],
        theme.hoverBgColors.darkBrand,
        'h-min border-2 rounded-lg hover:shadow-lg',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
