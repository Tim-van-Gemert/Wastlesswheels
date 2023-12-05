
const colors = {

  'white': '#fff',
  'blue': '#000000',
  'accent': '#A3AE8E',
  'salmon': '#FFADB9',
  'black': '#000000',
  'gray': '#9d9d9d',
  'red': '#ff000d',
  'lightgreen': '#86DB43'
};

const aliases = {
  primary: colors.blue,
  accent: colors.accent,
  inverse: colors.white,
  error: colors.red,
  page: colors.white,
  gray: colors.gray,
}

export default {
  transparent: 'transparent',
  current: 'currentColor',
  ...colors,
  ...aliases,
};