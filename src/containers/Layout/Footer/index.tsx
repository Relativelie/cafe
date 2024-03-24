import { useTranslation } from 'react-i18next';

import Container from './Background';
import PersonalLinks from './PersonalLinks';
import ResourcesLinks from './ResourcesLinks';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className='flex flex-col gap-2'>
        <h5 className='text-white'> {t('footer.pages')}</h5>
        <PersonalLinks />
      </div>
      <ResourcesLinks />
    </Container>
  );
};
