import { ReactNode } from "react";
import { ErrorMessage } from "@hookform/error-message";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  alt?: string;
  required?: string;
  errors?: FieldErrors;
  placeholder?: string;
};

const FormInput: React.FC<InputProps> = ({
  register,
  name,
  leftIcon,
  rightIcon,
  required = "Field is required",
  errors,
  placeholder = "",
}) => {
  return (
    <div className="relative grid grid-rows-[1fr,1.5em] justify-center items-center">
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute h-full flex items-center left-2">{leftIcon}</div>
        )}
        <input
          className={clsx(
            errors && errors[name]?.message
              ? "border-error"
              : "border-slate-300 focus:outline-lime-100",
            "h-full w-full py-2 pl-10 pr-2 border rounded-xl text-xl font-oxygen bg-transparent text-black",
          )}
          type="text"
          {...(register && { ...register(name, { required }) })}
          placeholder={placeholder}
        />

        {rightIcon && (
          <div className="absolute h-full flex items-center right-2">{rightIcon}</div>
        )}
      </div>
      {required && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className="text-error text-center">{message}</p>}
        />
      )}
    </div>
  );
};

export default FormInput;
