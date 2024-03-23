type AnchorLinkProps = {
  link: string;
  title?: string;
  children?: JSX.Element;
};

const AnchorLink: React.FC<AnchorLinkProps> = ({ link, title, children }) => {
  return (
    <a target='_blank' className='underline' href={link} rel='noopener noreferrer'>
      {title}
      {children}
    </a>
  );
};

export default AnchorLink;
