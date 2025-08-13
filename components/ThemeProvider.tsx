'use client';

import { useEffect } from "react";
import { ThemeProvider as NextThemesProviders, ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props } : ThemeProviderProps) => {
   
    return (
        <NextThemesProviders {...props}>
            {children}
        </NextThemesProviders>
  )
}

export default ThemeProvider