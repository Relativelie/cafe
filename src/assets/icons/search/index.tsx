type IconProps = {
  img: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ img, alt }) => {
  return <img src={img} alt={alt} className="w-full h-full" />;
};

export default Icon;
