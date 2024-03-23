import clsx from 'clsx';
import { ReactNode } from 'react';
import { useTheme } from 'theme/themeProvider';

type InputProps = {
  handleInputChange: (arg0: string) => void;
  srLabel: string;
  id: string;
  curVal?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  alt?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  handleInputChange,
  srLabel,
  id,
  curVal = '',
  leftIcon,
  rightIcon,
  className = '',
  alt = '',
}) => {
  const { theme } = useTheme();

  return (
    <div className={clsx(className, 'relative flex items-center')}>
      {leftIcon && (
        <div className='absolute left-2' aria-hidden={!alt}>
          {leftIcon}
        </div>
      )}
      <label htmlFor={id} className='sr-only'>
        {srLabel}
      </label>
      <input
        id={id}
        style={{ borderColor: theme.colors.opacityDefaultInverse }}
        className={clsx(
          theme.outlineFocusColor.brand,
          'h-full w-full py-2 pl-10 pr-2 border rounded-xl text-xl font-oxygen bg-transparent',
        )}
        type='text'
        value={curVal}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {rightIcon && (
        <div className='absolute right-2' aria-hidden={!alt}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
