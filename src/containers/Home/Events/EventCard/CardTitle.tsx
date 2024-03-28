type CardTitleProps = {
  title: string;
  date: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ title, date }) => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center mb-4'>
      <h3 className='h4'>{title}</h3>
      <h4 className='h5 font-cursive'>{date}</h4>
    </div>
  );
};
