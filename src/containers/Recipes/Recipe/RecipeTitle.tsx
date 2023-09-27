import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="col-start-2 row-start-2 relative p-4 bg-black/50">
      <div className="absolute -bottom-4 left-[40%] px-4 py-[1px] text-black bg-white">
        <h5 className="font-semibold">{'u can do it ♡'.toUpperCase()}</h5>
      </div>
      <div className="border-2 border-white p-4">
        <p className="text-3xl xl:text-5xl text-white">{title}</p>
      </div>
    </div>
  );
};

export default Header;
