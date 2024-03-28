import { Title } from 'components';
import { useTranslation } from 'react-i18next';

type DietTypeProps = {
  title: string;
};

const DietType: React.FC<DietTypeProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col gap-2' aria-labelledby='Diet types'>
      <Title headingText={t('home.our')} subHeadingText={t('recipes.dietType')} />
      <h5 className='font-semibold text-center'>{title}</h5>
    </section>
  );
};

export default DietType;
