import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

type AppCheckboxProps = {
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
};

const AppCheckbox: React.FC<AppCheckboxProps> = ({ label = '', checked, onChange }) => {
  const { theme } = useTheme();

  return (
    <div className='flex gap-4'>
      <input
        className={clsx(theme.accentColors.brand, 'w-5 h-5 self-center')}
        type='checkbox'
        name='status'
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label && (
        <label onClick={() => onChange(!checked)} className='h5'>
          {label}
        </label>
      )}
    </div>
  );
};
export default AppCheckbox;
