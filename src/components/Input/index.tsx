import clsx from 'clsx';
import { ReactNode } from 'react';
import { useTheme } from 'theme/themeProvider';

type AppInputProps = {
  curVal?: string;
  handleInputChange: (arg0: string) => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  alt?: string;
  className?: string;
};

const AppInput: React.FC<AppInputProps> = ({
  curVal,
  handleInputChange,
  leftIcon,
  rightIcon,
  className = '',
}) => {
  const { theme } = useTheme();

  return (
    <div className={clsx(className, 'relative flex items-center')}>
      {leftIcon && <div className='absolute h-full flex items-center left-2'>{leftIcon}</div>}
      <input
        style={{ borderColor: theme.colors.opacityDefaultInverse }}
        className={clsx(
          theme.outlineFocusColor.brand,
          'h-full w-full py-2 pl-10 pr-2 border rounded-xl text-xl font-oxygen bg-transparent',
        )}
        type='text'
        value={curVal}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {rightIcon && <div className='absolute h-full flex items-center right-2'>{rightIcon}</div>}
    </div>
  );
};

export default AppInput;
