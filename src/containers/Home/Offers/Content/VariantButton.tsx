import clsx from 'clsx';
import { ImageBlackout } from 'components';

type VariantButtonProps = {
  title: string;
  isSelected: boolean;
  poster: string;
  onClick: () => void;
};

const VariantButton: React.FC<VariantButtonProps> = ({
  title,
  isSelected,
  poster,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer"
    >
      <div
        className={clsx(
          isSelected && 'shadow-2xl',
          poster,
          'relative bg-center bg-cover h-32 w-32 rounded-full',
        )}
      >
        <ImageBlackout
          className={`duration-500 ease-in-out rounded-full ${
            isSelected ? 'opacity-0 ' : 'opacity-70'
          }`}
        />
      </div>
      <h3 className={clsx(!isSelected && 'opacity-40')}>{title}</h3>
    </div>
  );
};

export default VariantButton;
