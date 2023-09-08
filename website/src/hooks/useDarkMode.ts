import { useState, useEffect } from 'react';
import {
  addValueToLocalStorage,
  getValueFromLocalStorage,
} from '../utils/storage';
import { darkTheme, lightTheme } from '../assets/Themes';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const defaultValue: Theme = Theme.LIGHT;

export const useDarkMode = () => {
  const [themeValue, setThemeValue] = useState(
    getValueFromLocalStorage('theme') || defaultValue
  );

  const currentTheme = themeValue === Theme.LIGHT ? lightTheme : darkTheme;

  useEffect(() => {
    addValueToLocalStorage('theme', themeValue);
  }, [themeValue]);

  const themeToggler = () => {
    themeValue === Theme.LIGHT
      ? setThemeValue(Theme.DARK)
      : setThemeValue(Theme.LIGHT);
  };

  return {
    currentTheme,
    themeToggler,
  };
};
