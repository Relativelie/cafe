type IconProps = {
  className?: string;
};

const Icon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      fill="#000000"
      width="24px"
      height="24px"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
          fillRule="evenodd"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default Icon;
