import { Input } from 'components';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'utils/storeHooks';
import { onSearchChange } from 'store/recipes/recipesSlice';
import SearchIcon from 'assets/icons/SearchIcon';
import { useTheme } from 'theme/themeProvider';
import clsx from 'clsx';
import { memo } from 'react';

type SearchInputProps = {
  value: string;
  isMobileView: boolean;
};

const SearchInput: React.FC<SearchInputProps> = memo(function SearchInput({ isMobileView, value }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <Input
      id='search'
      srLabel={t('recipes.search')}
      curVal={value}
      handleInputChange={(value) => {
        dispatch(onSearchChange(value));
      }}
      leftIcon={<SearchIcon fill={theme.colors.defaultInverse} />}
      className={clsx(!isMobileView && 'mt-4 mr-4')}
    />
  );
});

export default SearchInput;
