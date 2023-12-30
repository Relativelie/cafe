import { useState } from 'react';
import Description from './Description';
import VariantButton from './VariantButton';
import { offersDataEu, offersDataRu } from './data';
import { useTheme } from 'theme/themeProvider';
import { useTranslation } from 'react-i18next';
import { LocalesVariantsENUM } from 'i18n/models';
import { AppButton } from 'components';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<number>(1);
  const navigate = useNavigate();

  const isSelected = (id: number) => {
    return id === selectedContent;
  };

  const offersData = i18n.language === LocalesVariantsENUM.En ? offersDataEu : offersDataRu;
  const selectedOffer = offersData.find(({ id }) => isSelected(id))!;

  return (
    <div className='flex flex-col gap-8 items-center'>
      <div className='flex gap-32'>
        {offersData.map((item) => (
          <VariantButton
            key={`${item.id}-btn`}
            isSelected={isSelected(item.id)}
            title={item.title}
            poster={item.poster}
            onClick={() => {
              setSelectedContent(item.id);
            }}
          />
        ))}
      </div>
      <div className='bg-no-repeat bg-home-poster bg-contain bg-center'>
        <div style={{ backgroundColor: theme.colors.opacityDefault }}>
          <div className='flex flex-col items-center justify-center'>
            {selectedOffer.description.map(({ title, content }) => (
              <Description key={title} title={title} content={content} />
            ))}
          </div>

          <h2 style={{ color: theme.colors.lightBrand }} className='text-center'>
            {selectedOffer.endingQuote}
          </h2>

          <div className='flex justify-center my-8'>
            <AppButton onClick={() => navigate(selectedOffer.path)}>Go to page</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
