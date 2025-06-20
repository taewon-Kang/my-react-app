import { createTheme, ThemeProvider } from "@mui/material";
import { type ReactNode } from "react";

export type MuiProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  spacing: 2,
});

export default function MuiProvider({ children }: MuiProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
