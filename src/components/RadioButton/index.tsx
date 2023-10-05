import React from 'react';

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
  return (
    <div className="flex gap-2 items-center">
      <input
        type="radio"
        checked={checked}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
      />
      {label && <label htmlFor={htmlFor}>{label}</label>}
    </div>
  );
};

export default AppRadioButton;
