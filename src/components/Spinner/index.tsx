import clsx from 'clsx';
import Loading from 'assets/icons/LoadingRecipeIcon';

type AppSpinnerProps = {
  className?: string;
};

const AppSpinner: React.FC<AppSpinnerProps> = ({ className }) => {
  return (
    <div className={clsx('flex h-full justify-center items-center', className)}>
      <div className="animate-[spin_1.7s_linear_infinite] h-32 w-32">
        <Loading />
      </div>
    </div>
  );
};

export default AppSpinner;
