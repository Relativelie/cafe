import React from 'react';

type TitleProps = {
  text: String;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="text-center uppercase font-semibold text-green-300 lg:mb-8">{text}</h3>
  );
};

export default Title;
