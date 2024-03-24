import { useTranslation } from 'react-i18next';
import { LegendItem } from './LegendItem';

const LegendList = () => {
  const { t } = useTranslation();

  const legendData = [
    { bgColor: 'bg-[#EF6262]', titleKey: 'analyst.fattyAcids' },
    { bgColor: 'bg-[#FFC95F]', titleKey: 'analyst.carbs' },
    { bgColor: 'bg-[#A0C49D]', titleKey: 'analyst.protein' },
  ];

  return (
    <ul className='flex flex-col gap-4'>
      {legendData.map((item) => (
        <LegendItem key={item.titleKey} bgColor={item.bgColor} title={t(item.titleKey)} />
      ))}
    </ul>
  );
};

export default LegendList;
