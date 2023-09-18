type AppTextAreaProps = {
  placeholder?: string;
  textareaRef?: React.Ref<any>;
};

export const AppTextArea: React.FC<AppTextAreaProps> = ({ placeholder, textareaRef }) => {
  return (
    <textarea
      ref={textareaRef}
      style={{ maxHeight: '90%' }}
      placeholder={placeholder}
      className="h-full w-full p-2 border rounded-xl border-slate-300 text-xl font-oxygen bg-transparent focus:outline-none focus:border-green-300 focus:border-2"
    ></textarea>
  );
};
