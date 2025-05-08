let currentTheme = 'light';

export const themes = {
  light: {
    primary: '#D8D8EB',
    secondary: '#7A7AA3',
    background: '#ffffff',
    textPrimary: '#000000',
    textSecondary: '#FFFFFF',
    button: '#007FFF',
    buttonHighlight: '#4691DC',
  },
  dark: {
    primary: '#222222',
    secondary: '#555555',
    background: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: '#000000',
    button: '#004488',
    buttonHighlight: '#002244',
  },
  goodBoy: {
    primary: '#333333',
    secondary: '#888888',
    background: '#111111',
    textPrimary: '#FAFAFA',
    textSecondary: '#222222',
    button: '#0088CC',
    buttonHighlight: '#006699',
  },
  CCA: {
    primary: '#444444',
    secondary: '#777777',
    background: '#121212',
    textPrimary: '#FFFFFF',
    textSecondary: '#222222',
    button: '#0099FF',
    buttonHighlight: '#0077CC',
  },
};

let Colors = { ...themes[currentTheme] };

export const switchTheme = (themeName) => {
  if (themes[themeName]) {
    currentTheme = themeName;
    Object.assign(Colors, themes[themeName]);
  } else {
    console.warn(`Theme "${themeName}" does not exist.`);
  }
};

export { Colors };
