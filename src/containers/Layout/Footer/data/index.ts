import Github from '../../../../assets/png/github.png';
import Linkedin from '../../../../assets/png/linkedin.png';
import { Link, LinksENUM } from './models';

export const links: { [key in LinksENUM]: Link } = {
  [LinksENUM.linkedin]: {
    link: 'https://www.linkedin.com/in/gu-khabibullina/',
    image: Linkedin,
  },
  [LinksENUM.github]: { link: 'https://github.com/Relativelie', image: Github },
};
