type TextAreaProps = {
  placeholder?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="h-full w-full p-2 border rounded-xl border-slate-300 text-xl font-oxygen bg-transparent focus:outline-none focus:border-green-300 focus:border-2"
    ></textarea>
  );
};
