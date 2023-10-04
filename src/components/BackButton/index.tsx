import BackIcon from 'assets/icons/BackIcon';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'theme/themeProvider';

type AppBackButtonProps = {
  title?: string;
  onBackButtonClick?: () => void;
};
const AppBackButton: React.FC<AppBackButtonProps> = ({
  title,
  onBackButtonClick,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

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
      {title && (
        <p style={{ color: theme.colors.default }} className="ml-1">
          {title}
        </p>
      )}
    </div>
  );
};

export default AppBackButton;
