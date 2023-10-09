type DescriptionProps = {
  title: string;
  content: string;
};

const Description: React.FC<DescriptionProps> = ({ title, content }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col gap-4 p-4 lg:w-2/3">
        <h3>{title}</h3>
        <h5>{content}</h5>
      </div>
    </div>
  );
};

export default Description;
