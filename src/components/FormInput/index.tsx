import { ReactNode } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { useTheme } from 'theme/themeProvider';

type AppInputProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  alt?: string;
  required?: string;
  errors?: FieldErrors;
  placeholder?: string;
};

const AppFormInput: React.FC<AppInputProps> = ({
  register,
  name,
  leftIcon,
  rightIcon,
  required = 'Field is required',
  errors,
  placeholder = '',
}) => {
  const { theme } = useTheme();

  const isError = errors && errors[name]?.message;

  const inputInlineStyles = {
    color: theme.colors.default,
    borderColor: isError ? theme.colors.danger : theme.colors.defaultInverse,
  };

  return (
    <div className='relative grid grid-rows-[1fr,1.5em] justify-center items-center'>
      <div className='relative flex items-center'>
        {leftIcon && <div className='absolute h-full flex items-center left-2'>{leftIcon}</div>}
        <input
          style={inputInlineStyles}
          className={clsx(
            isError && theme.outlineFocusColor.brand,
            'h-full w-full py-2 pl-10 pr-2 border rounded-xl text-xl font-oxygen bg-transparent',
          )}
          type='text'
          {...(register && { ...register(name, { required }) })}
          placeholder={placeholder}
        />

        {rightIcon && <div className='absolute h-full flex items-center right-2'>{rightIcon}</div>}
      </div>
      {required && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p style={{ color: theme.colors.danger }} className='text-center'>
              {message}
            </p>
          )}
        />
      )}
    </div>
  );
};

export default AppFormInput;
