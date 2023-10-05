export type Theme = {
  colors: AvailableColors;
  hoverBgColors: HoverBgColors;
  accentColors: AccentColors;
  focusColors: FocusColors;
  shadowColors: ShadowColors;
  hoverBorders: HoverBorderColors;
  outlineFocusColor: OutlineFocusColors;
};

export type AvailableColors = {
  lightBrand: string;
  darkBrand: string;
  danger: string;
  success: string;
  default: string;
  defaultInverse: string;
  opacityDefault: string;
  opacityDefaultInverse: string;
};

export type HoverBgColors = {
  darkBrand: string;
  lightBrand: string;
};

export type HoverBorderColors = {
  success: string;
};

export type ShadowColors = {
  darkBrand: string;
  lightBrand: string;
};

export type AccentColors = {
  brand: string;
};

export type OutlineFocusColors = {
  brand: string;
};

export type FocusColors = {
  brand: string;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: (arg: ThemeVariantsENUM) => void;
  selectedThemeTitle: ThemeVariantsENUM;
};

export enum ThemeVariantsENUM {
  Light = 'LIGHT',
  Dark = 'DARK',
}
