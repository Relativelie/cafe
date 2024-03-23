import clsx from 'clsx';
import Loading from 'assets/icons/LoadingRecipeIcon';

type SpinnerProps = {
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={clsx('flex h-full justify-center items-center', className)}
      role='alert'
      aria-live='polite'
    >
      <div className='animate-[spin_1.7s_linear_infinite] h-32 w-32'>
        <Loading />
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
