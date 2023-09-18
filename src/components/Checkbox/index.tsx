type AppCheckboxProps = {
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
};

const AppCheckbox: React.FC<AppCheckboxProps> = ({ label = '', checked, onChange }) => {
  return (
    <div className="flex gap-4">
      <input
        className="w-5 h-5 accent-green-300 self-center"
        type="checkbox"
        name="status"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label && <label className="h5">{label}</label>}
    </div>
  );
};
export default AppCheckbox;
