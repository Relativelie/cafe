import { ReactNode } from "react";

type InputProps = {
  curVal: string;
  handleInputChange: (arg0: string) => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  alt?: string;
};

const Input: React.FC<InputProps> = ({
  curVal,
  handleInputChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className="relative flex items-center">
      {leftIcon && (
        <div className="absolute h-full flex items-center left-2">
          {leftIcon}
        </div>
      )}
      <input
        className="h-full w-full py-2 pl-10 pr-2 border rounded-xl border-slate-300 text-xl font-oxygen bg-transparent focus:outline-lime-100"
        type="text"
        value={curVal}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {rightIcon && (
        <div className="absolute h-full flex items-center right-2">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
