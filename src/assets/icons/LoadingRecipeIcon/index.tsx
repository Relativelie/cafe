import clsx from 'clsx';
import LoadingRecipeOne from '../../png/loading-recipe-1.png';
import LoadingRecipeTwo from '../../png/loading-recipe-2.png';
import LoadingRecipeThree from '../../png/loading-recipe-3.png';

const loadingImg = [LoadingRecipeOne, LoadingRecipeTwo, LoadingRecipeThree];

type IconProps = {
  className?: string;
};

const Icon: React.FC<IconProps> = ({ className }) => {
  const randomImg = Math.floor(Math.random() * loadingImg.length);
  return (
    <img
      src={loadingImg[randomImg]}
      alt='loading icon'
      className={clsx(className, 'w-full h-full')}
    />
  );
};

export default Icon;
