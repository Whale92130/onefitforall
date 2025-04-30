let currentTheme = 'light';

const themes = {
  light: {
    primary: '#D8D8EB',      // light purple
    secondary: '#7A7AA3',    // dark purple
    background: '#ffffff',   // white
    textPrimary: '#000000',  // black
    textSecondary: '#FFFFFF',  // white
    button: '#007FFF', // blue
    buttonHighlight: '#4691DC', // dark blue
  },
  dark: {
    primary: "#222222",
    secondary: "#555555",
    background: "#000000",
    textPrimary: "#FFFFFF",
    textSecondary: "#000000",
    button: "#004488",
    buttonHighlight: "#002244",
  },
  goodBoy: {
    primary: "#222222",
    secondary: "#555555",
    background: "#000000",
    textPrimary: "#FFFFFF",
    textSecondary: "#000000",
    button: "#004488",
    buttonHighlight: "#002244",
  },
  CCA: {
    primary: "#222222",
    secondary: "#555555",
    background: "#000000",
    textPrimary: "#FFFFFF",
    textSecondary: "#000000",
    button: "#004488",
    buttonHighlight: "#002244",
  },
};

export const Colors = new Proxy(themes.light, {
  get: (target, property) => themes[currentTheme][property] || target[property],
});

export const switchTheme = (themeName) => {
  currentTheme = themeName;
};