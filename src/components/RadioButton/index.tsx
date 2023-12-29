import clsx from 'clsx';
import React from 'react';
import { useTheme } from 'theme/themeProvider';

type AppRadioButtonProps = {
  name?: string;
  value?: string;
  id?: string;
  htmlFor?: string;
  label?: string;
  checked?: boolean;
  onChange?: () => void;
};

const AppRadioButton: React.FC<AppRadioButtonProps> = ({
  name,
  value,
  id,
  htmlFor,
  label,
  checked,
  onChange,
}) => {
  const { theme } = useTheme();

  return (
    <div className='flex gap-2 items-center'>
      <input
        type='radio'
        className={clsx(theme.accentColors.brand, 'self-center')}
        checked={checked}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
      />
      {label && (
        <label
          style={{ color: theme.colors.defaultInverse }}
          className='cursor-pointer'
          htmlFor={htmlFor}
          onClick={onChange}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default AppRadioButton;
