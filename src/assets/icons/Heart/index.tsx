type IconProps = {
  className?: string;
  fill?: "red" | "gray";
};

const fillVal = {
  red: "#FF0000",
  gray: "#808080",
};
const Icon: React.FC<IconProps> = ({ className = "", fill = "gray" }) => {
  return (
    <svg
      className={className}
      width="34px"
      height="34px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
          fill={fillVal[fill]}
        ></path>
      </g>
    </svg>
  );
};

export default Icon;
