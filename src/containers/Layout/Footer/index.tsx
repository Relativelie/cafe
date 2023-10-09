import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { AppAnchorLink, ImageBlackout } from 'components';
import Github from '../../../assets/png/github.png';
import Linkedin from '../../../assets/png/linkedin.png';

const links = {
  linkedin: {
    link: 'https://www.linkedin.com/in/gu-khabibullina/',
    image: Linkedin,
  },
  github: { link: 'https://github.com/Relativelie', image: Github },
};

export const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="h-32">
      <div className="fixed bottom-0 left-0 right-0 z-20 flex bg-sea-poster h-32 bg-[center_top_40%] bg-cover">
        <ImageBlackout />
        <div
          style={{ borderColor: theme.colors.lightBrand }}
          className="absolute bottom-0 w-full h-full border-t flex justify-around items-center gap-5 z-10 text-white"
        >
          <div className="flex flex-col gap-2">
            <h5 className="text-white"> {t('footer.pages')}</h5>
            <div className="flex justify-center gap-4">
              {Object.keys(links).map((item) => (
                <AppAnchorLink
                  key={links[item as keyof typeof links].link}
                  link={links[item as keyof typeof links].link}
                  child={
                    <img
                      className="h-16 w-16 border-2 rounded-full filter grayscale hover:filter-none"
                      src={links[item as keyof typeof links].image}
                      alt={item}
                    />
                  }
                />
              ))}
            </div>
          </div>
          <h5 className="text-white">
            {t('footer.imageSource')}{' '}
            <AppAnchorLink
              link={t('footer.imageSource')}
              title={`${t('footer.unsplashLink')}`}
            />
          </h5>
        </div>
      </div>
    </div>
  );
};
