import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

type CheckboxProps = {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const { theme } = useTheme();

  const handleChange = () => onChange(!checked);

  return (
    <label className='flex gap-4 items-center cursor-pointer'>
      <input
        className={clsx(theme.accentColors.brand, 'w-5 h-5 self-center')}
        type='checkbox'
        name='status'
        checked={checked}
        onChange={handleChange}
      />
      <h5>{label}</h5>
    </label>
  );
};
export default Checkbox;
