import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import Github from '../../../assets/png/github.png';
import Linkedin from '../../../assets/png/linkedin.png';
import { AppAnchorLink } from 'components';

const links = {
  github: { link: 'https://github.com/Relativelie', image: Github },
  linkedin: {
    link: 'https://www.linkedin.com/in/gu-khabibullina/',
    image: Linkedin,
  },
};

export const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="relative flex bg-sea-poster h-40 bg-[center_top_40%] bg-cover">
      <div className="bg-black absolute inset-0 opacity-50"></div>
      <div
        style={{ borderColor: theme.colors.lightBrand }}
        className="w-full h-full border-t flex justify-around items-center gap-5 z-10 text-white"
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
  );
};
