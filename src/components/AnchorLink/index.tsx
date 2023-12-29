type AppAnchorLinkProps = {
  link?: string;
  title?: string;
  child?: JSX.Element;
};

const AppAnchorLink: React.FC<AppAnchorLinkProps> = ({ link, title, child }) => {
  return (
    <a target='_blank' className='underline' href={link} rel='noreferrer'>
      {title}
      {child}
    </a>
  );
};

export default AppAnchorLink;
