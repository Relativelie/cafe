import { Theme } from 'theme/models';

const lightTheme: Theme = {
  colors: {
    lightBrand: '#c97c68d4',
    darkBrand: '#83493b9a',
    success: '#25894f',
    danger: '#ed3c14',
    default: '#efd7cf',
    opacityDefault: '#fff6dc83',
    defaultInverse: '#18181b',
    opacityDefaultInverse: '#18181b7d',
  },
  hoverBgColors: {
    darkBrand: 'hover:bg-[#9149399a]',
    lightBrand: 'hover:bg-[#9BABB8]',
  },
  hoverBorders: {
    success: 'hover:border-[#16a34a]',
  },
  accentColors: {
    brand: 'accent-[#83493b9a]',
  },
  focusColors: {
    brand: 'focus:border-[#9BABB8]',
  },
  outlineFocusColor: {
    brand: 'focus:outline-[#967E76]',
  },
  shadowColors: {
    darkBrand: 'hover:bg-[#967E76]',
    lightBrand: 'hover:bg-[#D7C0AE]',
  },
};

export default lightTheme;
