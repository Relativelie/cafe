type CheckboxProps = {
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label = "", checked, onChange }) => {
  return (
    <div className="flex gap-4">
      <input
        className="w-5 h-5 accent-green-300 self-center"
        type="checkbox"
        name="status"
        checked={checked}
        onChange={(e) => onChange(!!e.target.value)}
      />
      {label && <label className="h4">{label}</label>}
    </div>
  );
};
export default Checkbox;