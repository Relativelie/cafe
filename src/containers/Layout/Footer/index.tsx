import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { AnchorLink, Backdrop } from 'components';
import { links } from './data';
import { LinksENUM } from './data/models';

export const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className='h-28 md:h-32 mt-8'>
      <div className='fixed bottom-0 left-0 right-0 z-20 flex bg-sea-poster h-28 md:h-32 bg-[center_top_40%] bg-cover'>
        <Backdrop />
        <div
          style={{ borderColor: theme.colors.lightBrand }}
          className='absolute bottom-0 w-full h-full border-t flex flex-col md:flex-row justify-around items-center py-4 md:py-0 md:gap-5 z-10 text-white'
        >
          <div className='flex flex-col gap-2'>
            <h5 className='text-white'> {t('footer.pages')}</h5>
            <div className='flex justify-center gap-4'>
              {Object.keys(links).map((item) => (
                <AnchorLink
                  key={links[item as unknown as LinksENUM].link}
                  link={links[item as unknown as LinksENUM].link}
                >
                  <img
                    className='h-8 w-8 md:h-16 md:w-16 border-2 rounded-full filter grayscale hover:filter-none'
                    src={links[item as unknown as LinksENUM].image}
                    alt={item}
                  />
                </AnchorLink>
              ))}
            </div>
          </div>
          <h5 className='text-white text-center'>
            {t('footer.imageSource')}{' '}
            <AnchorLink link={t('footer.imageSource')} title={`${t('footer.unsplashLink')}`} />
          </h5>
        </div>
      </div>
    </div>
  );
};
