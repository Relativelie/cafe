import { Theme } from 'theme/models';

const kenTheme: Theme = {
  colors: {
    lightBrand: '#3EDBF0',
    darkBrand: '#94DAFF',
    success: '#25894f',
    danger: '#ed3c14',
    default: '#cad6e6',
    opacityDefault: '#77acf17e',
    defaultInverse: '#000000',
    opacityDefaultInverse: '#24436c7f',
  },
  hoverBgColors: {
    darkBrand: 'hover:bg-[#98bdd1]',
    lightBrand: 'hover:bg-[#a8caf7c4]',
  },
  hoverBorders: {
    success: 'hover:border-[#16a34a]',
  },
  accentColors: {
    brand: 'accent-[#3EDBF0]',
  },
  focusColors: {
    brand: 'focus:border-[#3EDBF0]',
  },
  outlineFocusColor: {
    brand: 'focus:outline-[#98ded9b3]',
  },
  shadowColors: {
    darkBrand: 'hover:bg-[#98ded9ba]',
    lightBrand: 'hover:bg-[#a8caf7]',
  },
};

export default kenTheme;
