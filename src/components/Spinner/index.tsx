import classNames from "classnames";
import Loading from "../../assets/icons/LoadingRecipe";

type SpinnerProps =
  {
    className?: string;
  };

const Spinner: React.FC<
  SpinnerProps
> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex h-full justify-center items-center",
        className,
      )}
    >
      <div className="animate-[spin_1.7s_linear_infinite] h-28">
        <Loading />
      </div>
    </div>
  );
};

export default Spinner;
