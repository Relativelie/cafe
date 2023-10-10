import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from 'store';
import { AppTextArea, AppButton, ButtonSizeENUM } from 'components';

type AnalystInputProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
};

const AnalystInput: React.FC<AnalystInputProps> = ({ inputRef }) => {
  const { analystStore } = useStore();
  const { getNutrition } = analystStore;

  const { t } = useTranslation();

  const onClickAnalyze = async () => {
    let searchingValue = getAnalyzedArray();

    await getNutrition(searchingValue);
  };

  const getAnalyzedArray = (): Array<string> => {
    if (!inputRef.current?.value) return [];

    if (inputRef.current?.value.includes(',')) {
      return inputRef.current?.value.replace(/\n/g, ' ').split(', ');
    }
    return inputRef.current?.value
      .split(/\n/g)
      .filter((item: string) => item !== '');
  };

  return (
    <div className="h-96 w-full md:w-2/4">
      <AppTextArea
        textareaRef={inputRef}
        placeholder={`${t('analyst.write')} \n${t('analyst.example')}`}
      />
      <AppButton size={ButtonSizeENUM.full} onClick={onClickAnalyze}>
        {t('analyst.analyze')}
      </AppButton>
    </div>
  );
};

export default AnalystInput;
