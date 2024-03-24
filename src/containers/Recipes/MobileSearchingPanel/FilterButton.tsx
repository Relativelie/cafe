import FilterIcon from 'assets/icons/FilterIcon';
import { useTheme } from 'theme/themeProvider';

type FilterButtonProps = {
  showModal: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ showModal }) => {
  const { theme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: theme.colors.lightBrand,
        borderColor: theme.colors.defaultInverse,
      }}
      onClick={showModal}
      className='p-3 mr-4 rounded-full border-2 cursor-pointer'
      aria-label='Open recipes filter'
    >
      <FilterIcon />
    </button>
  );
};

export default FilterButton;
