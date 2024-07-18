// src/providers/theme.tsx
"use client";

import { ThemeConfig } from "antd";
import { ThemeProvider as AntdThemeProvider, GetAntdTheme } from "antd-style";
import React, { createContext, useContext } from "react";

const theme: ThemeConfig | GetAntdTheme = {
  token: {
    colorPrimary: '#9f6744',
    borderRadius: 2,
    colorBgContainer: '#f6ffed',
  },
  components: {
    Input: {
      colorText: "#ff0000d3",
    },
  },
};

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <AntdThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </AntdThemeProvider>
  );
};

export default AppThemeProvider;
