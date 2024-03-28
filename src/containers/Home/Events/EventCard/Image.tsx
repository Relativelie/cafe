type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className='shadow-black shadow-md'>
      <img src={src} alt={alt} loading='lazy' decoding='async' />
    </div>
  );
};

export default Image;
