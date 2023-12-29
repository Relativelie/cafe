import { useTranslation } from 'react-i18next';
import ContentTitle from './ContentTitle';

type DietTypeProps = {
  title: string;
};

const DietType: React.FC<DietTypeProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-2'>
      <ContentTitle text={t('recipes.dietType')} />
      <h5 className='font-semibold text-center'>{title}</h5>
    </div>
  );
};

export default DietType;
