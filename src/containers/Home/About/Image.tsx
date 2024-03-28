type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} className='hidden md:block bg-cover bg-center h-96 w-64' alt={alt} />;
};

export default Image;
