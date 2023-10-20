import { clsx } from 'clsx'
import { useTheme } from 'theme/themeProvider'

type AppTextAreaProps = {
  placeholder?: string
  textareaRef?: React.RefObject<HTMLTextAreaElement>
}

const AppTextArea: React.FC<AppTextAreaProps> = ({ placeholder, textareaRef }) => {
  const { theme } = useTheme()

  return (
    <textarea
      ref={textareaRef}
      style={{ borderColor: theme.colors.opacityDefaultInverse }}
      placeholder={placeholder}
      className={clsx(
        theme.focusColors.brand,
        'h-[90%] w-full p-2 border rounded-xl text-xl font-oxygen bg-transparent focus:outline-none focus:border-2',
      )}
    ></textarea>
  )
}

export default AppTextArea
