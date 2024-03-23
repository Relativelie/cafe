import { useTranslation } from 'react-i18next';
import { TextArea, Button, ButtonSize } from 'components';

type AnalystInputProps = {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  postAnalyst: (po: string[]) => void;
};

const AnalystInput: React.FC<AnalystInputProps> = ({ textAreaRef, postAnalyst }) => {
  const { t } = useTranslation();

  const onClickAnalyze = () => {
    const searchingValue = getAnalyzedArray();

    postAnalyst(searchingValue);
  };

  const getAnalyzedArray = (): Array<string> => {
    if (!textAreaRef.current?.value) return [];

    if (textAreaRef.current?.value.includes(',')) {
      return textAreaRef.current?.value.replace(/\n/g, ' ').split(', ');
    }
    return textAreaRef.current?.value.split(/\n/g).filter((item: string) => item !== '');
  };

  return (
    <div className='h-96 w-full md:w-2/4'>
      <TextArea ref={textAreaRef} placeholder={`${t('analyst.write')} \n${t('analyst.example')}`} />
      <Button size={ButtonSize.full} onClick={onClickAnalyze}>
        {t('analyst.analyze')}
      </Button>
    </div>
  );
};

export default AnalystInput;
