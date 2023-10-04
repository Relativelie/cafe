import { Theme } from 'theme/models';

const lightTheme: Theme = {
  colors: {
    lightBrand: '#45ff42ec',
    darkBrand: '#0f172ab5',
    success: '#16a34a',
    danger: '#ed3c14',
    default: '#e2e8f0',
    opacityDefault: '#e2e8f086',
    defaultInverse: '#18181b',
    opacityDefaultInverse: '#18181b93',
  },
  hoverBgColors: {
    darkBrand: 'hover:bg-[#0f172ab5]',
    lightBrand: 'hover:bg-[#f43f5d47]',
  },
  hoverBorders: {
    success: 'hover:border-[#16a34a]',
  },
  accentColors: {
    brand: '#24ff21',
  },
  focusColors: {
    brand: 'focus:border-[#24ff21]',
  },
  outlineFocusColor: {
    brand: 'focus:outline-[#ecfccb]',
  },
  shadowColors: {
    darkBrand: 'hover:bg-[#0f172ab5]',
    lightBrand: 'hover:bg-[#f43f5d47]',
  },
};

export default lightTheme;
