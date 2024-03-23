import BackIcon from 'assets/icons/BackIcon';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'theme/themeProvider';

type BackButtonProps = {
  title: string;
  onClick?: () => void;
};
const BackButton: React.FC<BackButtonProps> = ({ title, onClick }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const onBackClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    navigate(-1);
  };

  return (
    <button
      className='col-span-2 flex items-center w-fit ml-1 cursor-pointer hover:scale-105'
      onClick={onBackClick}
      aria-label={title || 'Go back'}
      style={{ color: theme.colors.default }}
    >
      <BackIcon className='w-10 h-10' />
      {title && <p className='ml-1'>{title}</p>}
    </button>
  );
};

export default BackButton;
