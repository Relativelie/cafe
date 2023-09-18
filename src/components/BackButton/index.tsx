import BackIcon from 'assets/icons/BackIcon';
import { useNavigate } from 'react-router-dom';

type AppBackButtonProps = {
  title?: string;
  onBackButtonClick?: () => void;
};
const AppBackButton: React.FC<AppBackButtonProps> = ({ title, onBackButtonClick }) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
    onBackButtonClick && onBackButtonClick();
  };

  return (
    <div
      className="col-span-2 flex items-center w-fit ml-1 cursor-pointer hover:scale-105"
      onClick={onBackClick}
    >
      <BackIcon className="w-10 h-10 " />
      {title && <p className="ml-1 text-black">{title}</p>}
    </div>
  );
};

export default AppBackButton;
