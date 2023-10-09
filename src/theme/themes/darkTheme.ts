import { Theme } from '../models';

const darkTheme: Theme = {
  colors: {
    lightBrand: 'rgb(207, 141, 79)',
    darkBrand: '#0f172ab5',
    danger: '#ed3c14',
    success: '#16a34a',
    default: '#18181b',
    opacityDefault: '#18181bcb',
    defaultInverse: '#f0f7feff',
    opacityDefaultInverse: '#f1f5f981',
  },
  hoverBgColors: {
    darkBrand: 'hover:bg-[#0f172ab5]',
    lightBrand: 'hover:bg-[#f43f5d47]',
  },
  hoverBorders: {
    success: 'hover:border-[#16a34a]',
  },
  accentColors: {
    brand: 'accent-[rgb(207, 141, 79)]',
  },
  focusColors: {
    brand: 'focus:border-[rgb(207, 141, 79)]',
  },
  outlineFocusColor: {
    brand: 'focus:outline-[#ecfccb]',
  },
  shadowColors: {
    darkBrand: 'hover:bg-[#0f172ab5]',
    lightBrand: 'hover:bg-[#f43f5d47]',
  },
};

export default darkTheme;
