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
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>key</title>{" "}
        <path d="M9.938 20.25l-1.219-1.25s-3.469 1.344-6.969-2.125c-2.969-2.969-1.656-7.625 0.281-9.531 2.063-2.063 6.469-3.313 9.688-0.094s1.844 7.031 1.844 7.031l8.844 8.813-0.25 4.594-4.5 0.281-0.25-2.25-2.344-0.281-0.219-2.344-2.313-0.313-0.344-2.25zM3.25 8.594c-1.375 1.375-1.75 3.219-0.844 4.094 0.906 0.906 2.719 0.531 4.094-0.844s1.781-3.219 0.875-4.094c-0.875-0.906-2.75-0.531-4.125 0.844zM21.344 24.844l0.063-1.313-8.406-8.406-0.688 0.688z"></path>{" "}
      </g>
    </svg>
  );
};

export default Icon;
