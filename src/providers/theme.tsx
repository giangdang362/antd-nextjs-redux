"use client";

import { ThemeProvider } from "antd-style";
import { ReactNode } from "react";

const AppThemeProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  return (
    <ThemeProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#9f6744',
            borderRadius: 2,
            // Alias Token
            colorBgContainer: '#f6ffed',
          },
          components: {
            Input: {
              colorText: "#ff0000d3"
            }
          }
        }}
      >
        {children}
      </ThemeProvider>
  );
}

export default AppThemeProvider;
