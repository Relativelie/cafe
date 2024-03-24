import { Checkbox } from 'components';
import { useTranslation } from 'react-i18next';
import { CheckboxFilter, FiltersENUM } from 'store/recipes/models/common';

type SectionProps = {
  filterSection: CheckboxFilter;
  onChange: (key: string) => void;
  section: FiltersENUM;
};

const Section: React.FC<SectionProps> = ({ filterSection, section, onChange }) => {
  const { t } = useTranslation();

  return (
    <fieldset>
      <legend className='h4'>{t(`recipes.filters.${section}`)}</legend>
      <div className='flex flex-col gap-2 md:gap-1'>
        {Object.entries(filterSection).map(([key, isChecked]) => {
          return (
            <div key={key} className='ml-2'>
              <Checkbox label={key} checked={isChecked} onChange={() => onChange(key)} />
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Section;
