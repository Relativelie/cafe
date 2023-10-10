import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from 'store';
import { AppTextArea, AppButton, ButtonSizeENUM } from 'components';

const AnalystInput = () => {
  const { analystStore } = useStore();
  const { getNutrition } = analystStore;

  const textareaRef = useRef<any>();
  const { t } = useTranslation();

  const onClickAnalyze = async () => {
    let searchingValue = getAnalyzedArray();

    await getNutrition(searchingValue);
  };

  const getAnalyzedArray = (): Array<string> => {
    if (textareaRef.current?.value.includes(',')) {
      return textareaRef.current?.value.replace(/\n/g, ' ').split(', ');
    }
    return textareaRef.current?.value
      .split(/\n/g)
      .filter((item: string) => item !== '');
  };

  return (
    <div className="h-96 w-full md:w-2/4">
      <AppTextArea
        textareaRef={textareaRef}
        placeholder={`${t('analyst.write')} \n${t('analyst.example')}`}
      />
      <AppButton size={ButtonSizeENUM.full} onClick={onClickAnalyze}>
        {t('analyst.analyze')}
      </AppButton>
    </div>
  );
};

export default AnalystInput;
