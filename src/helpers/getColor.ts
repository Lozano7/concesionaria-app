interface Colors {
  [key: string]: string;
}

const colors: Colors = {
  '#fff': 'bg-[#ffffff]',
  '#f13': 'bg-[#f13]',
  '#000': 'bg-[#000000]',
  '#999': 'bg-[#999999]',
  '#C3B4A5': 'bg-[#C3B4A5]',
  '#04f': 'bg-[#04f]',
  '#03f': 'bg-[#03f]',
  '#f03': 'bg-[#f03]',
};

export const getColor = (color: string): string => {
  return colors[color];
};
