import clsx from 'clsx';

type BackdropProps = {
  className?: string;
};

const Backdrop: React.FC<BackdropProps> = ({ className }) => {
  return <div className={clsx(className, 'bg-black absolute inset-0 opacity-50')} />;
};

export default Backdrop;
