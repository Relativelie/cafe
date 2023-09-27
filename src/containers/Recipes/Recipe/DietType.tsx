import { useTranslation } from 'react-i18next';
import Title from './Title';

type DietTypeProps = {
  title: String;
};

const DietType: React.FC<DietTypeProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <>
      <Title text={t('recipes.dietType')} />
      <h5 className="font-semibold text-center">{title}</h5>
    </>
  );
};

export default DietType;
