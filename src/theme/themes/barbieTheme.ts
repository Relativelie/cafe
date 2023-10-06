import { Theme } from 'theme/models';

const barbieTheme: Theme = {
  colors: {
    lightBrand: '#FF3FA4',
    darkBrand: '#F2789F',
    success: '#25894f',
    danger: '#ed3c14',
    default: '#FBE8E7',
    opacityDefault: '#fbe8e783',
    defaultInverse: '#18181b',
    opacityDefaultInverse: '#89445a',
  },
  hoverBgColors: {
    darkBrand: 'hover:bg-[#b14164]',
    lightBrand: 'hover:bg-[#f6a8c1]',
  },
  hoverBorders: {
    success: 'hover:border-[#16a34a]',
  },
  accentColors: {
    brand: 'accent-[#FF3FA4]',
  },
  focusColors: {
    brand: 'focus:border-[#b14164]',
  },
  outlineFocusColor: {
    brand: 'focus:outline-[#b14164]',
  },
  shadowColors: {
    darkBrand: 'hover:bg-[#b14164]',
    lightBrand: 'hover:bg-[#f6a8c1]',
  },
};

export default barbieTheme;
