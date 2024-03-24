import clsx from 'clsx';

type LegendItemProps = {
  bgColor: string;
  title: string;
};

export const LegendItem: React.FC<LegendItemProps> = ({ bgColor, title }) => {
  return (
    <li className='flex gap-2'>
      <span
        className={clsx('rounded-full w-4 h-4', bgColor)}
        aria-label={`${title} color indicator`}
      />
      <span>{title}</span>
    </li>
  );
};
