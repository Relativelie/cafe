import Container from './Container';
import Settings from './Settings';
import { MenuList } from './MenuList';
import { HomeLink } from './HomeLink';

const Header = () => {
  return (
    <Container>
      <HomeLink />
      <div className='flex gap-4'>
        <MenuList />
        <Settings />
      </div>
    </Container>
  );
};

export default Header;
