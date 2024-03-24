import { useTranslation } from 'react-i18next';
import { TextArea, Button, ButtonSize } from 'components';
import { memo } from 'react';

type TextAnalysisInputProps = {
  postAnalyst: (po: string[]) => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
};

const TextAnalysisInput: React.FC<TextAnalysisInputProps> = memo(function TextAnalysisInput({
  textAreaRef,
  postAnalyst,
}) {
  const { t } = useTranslation();

  const onClickAnalyze = () => {
    const searchingValue = getAnalysisData();

    postAnalyst(searchingValue);
  };

  const getAnalysisData = (): string[] => {
    const textValue = textAreaRef.current?.value || '';
    return textValue
      .split(/,|\n/)
      .map((item) => item.trim())
      .filter((item) => item !== '');
  };

  return (
    <section className='h-96 w-full md:w-2/4' aria-labelledby='Input data for the search analyst'>
      <TextArea ref={textAreaRef} placeholder={`${t('analyst.write')} \n${t('analyst.example')}`} />
      <Button size={ButtonSize.full} onClick={onClickAnalyze}>
        {t('analyst.analyze')}
      </Button>
    </section>
  );
});

export default TextAnalysisInput;
