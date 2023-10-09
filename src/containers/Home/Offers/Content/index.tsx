import { useState } from 'react';
import Description from './Description';
import VariantButton from './VariantButton';
import offersData from './data';
import { useTheme } from 'theme/themeProvider';

const Content = () => {
  const { theme } = useTheme();
  const [selectedContent, setSelectedContent] = useState<number>(1);

  const isSelected = (id: number) => {
    return id === selectedContent;
  };

  const selectedOffer = offersData.filter(({ id }) => isSelected(id))[0];
  return (
    <div className="flex flex-col gap-8 items-center mt-14">
      <div className="flex gap-32">
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
      <div className=" bg-no-repeat bg-home-poster bg-contain bg-center">
        <div style={{ backgroundColor: theme.colors.opacityDefault }}>
          <div className="flex flex-col h-[30vh] items-center justify-center">
            {selectedOffer.description.map(({ title, content }) => (
              <Description key={title} title={title} content={content} />
            ))}
          </div>
          <h2
            style={{ color: theme.colors.lightBrand }}
            className="text-center"
          >
            {selectedOffer.endingQuote}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
