import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

type RadioButtonProps = {
  label: string;
  id: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, name, value, checked, onChange }) => {
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
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
