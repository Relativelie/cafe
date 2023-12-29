type IconProps = {
  className?: string;
  fill?: string;
};

const Icon: React.FC<IconProps> = ({ className = '', fill = 'white' }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5ZM10.3347 11.7489C9.25973 12.5356 7.9341 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.9341 12.5356 9.25973 11.7489 10.3347L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10.3347 11.7489Z'
        fill={fill}
      />
    </svg>
  );
};

export default Icon;
