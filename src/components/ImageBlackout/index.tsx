import clsx from 'clsx';

type ImageBlackoutProps = {
  className?: string;
};

const ImageBlackout: React.FC<ImageBlackoutProps> = ({ className }) => {
  return <div className={clsx(className, 'bg-black absolute inset-0 opacity-50')}></div>;
};

export default ImageBlackout;
