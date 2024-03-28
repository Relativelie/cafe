import clsx from 'clsx';
import { useTheme } from 'theme/themeProvider';

export enum TitleSizesEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
}

type TitleProps = {
  headingText: string;
  subHeadingText: string;
  size?: TitleSizesEnum;
};

const Title: React.FC<TitleProps> = ({
  headingText,
  subHeadingText,
  size = TitleSizesEnum.SMALL,
}) => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col items-center'>
      <h2
        style={{ color: theme.colors.lightBrand }}
        className={clsx(
          'font-cursive text-shadow-[0_4px_8px_#111111]',
          size === TitleSizesEnum.SMALL ? 'h4' : 'h2',
        )}
      >
        {headingText}
      </h2>
      <h2
        className={clsx(
          'font-bold text-shadow-[0_4px_8px_#111111]',
          size === TitleSizesEnum.SMALL ? 'h4' : 'h2',
        )}
      >
        {subHeadingText}
      </h2>
    </div>
  );
};

export default Title;
