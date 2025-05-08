// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Colors as initialColors, switchTheme as rawSwitchTheme, themes } from './colors';

type ThemeName = keyof typeof themes;

type ThemeContextType = {
  themeName: ThemeName;
  colors: typeof initialColors;
  switchTheme: (themeName: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const [colors, setColors] = useState({ ...themes[themeName] });

  const switchTheme = (name: ThemeName) => {
    rawSwitchTheme(name);
    setThemeName(name);
    setColors({ ...themes[name] });
  };

  return (
    <ThemeContext.Provider value={{ themeName, colors, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
