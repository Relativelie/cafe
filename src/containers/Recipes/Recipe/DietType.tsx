type DietTypeProps = {
  title: String;
};

const DietType: React.FC<DietTypeProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-center uppercase font-semibold text-green-300 mb-8">
        Diet Type
      </h3>

      <h5 className="font-semibold text-center">{title}</h5>
    </>
  );
};

export default DietType;
