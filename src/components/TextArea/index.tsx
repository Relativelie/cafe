import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { useTheme } from 'theme/themeProvider';

type TextAreaProps = {
  placeholder?: string;
};

const AppTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ placeholder }, ref) => {
  const { theme } = useTheme();

  return (
    <textarea
      ref={ref}
      style={{ borderColor: theme.colors.opacityDefaultInverse }}
      placeholder={placeholder}
      className={clsx(
        theme.focusColors.brand,
        'h-[90%] w-full p-2 border rounded-xl text-xl font-oxygen bg-transparent focus:outline-none focus:border-2',
      )}
    />
  );
});

AppTextArea.displayName = 'AppTextArea';

export default AppTextArea;
