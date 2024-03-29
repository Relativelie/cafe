import clsx from 'clsx';
import { Backdrop } from 'components';

type VariantButtonProps = {
  title: string;
  isSelected: boolean;
  poster: string;
  onClick: () => void;
};

const VariantButton: React.FC<VariantButtonProps> = ({ title, isSelected, poster, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex flex-col justify-center items-center gap-2 cursor-pointer'
    >
      <div
        className={clsx(
          isSelected && 'shadow-2xl',
          poster,
          'relative bg-center bg-cover h-16 w-16 md:h-32 md:w-32 rounded-full',
        )}
      >
        <Backdrop
          className={`duration-500 ease-in-out rounded-full ${
            isSelected ? 'opacity-0 bg-black/10' : 'opacity-70'
          }`}
        />
      </div>
      <h3 className={clsx(!isSelected && 'opacity-40', 'p md:h3')}>{title}</h3>
    </button>
  );
};

export default VariantButton;
