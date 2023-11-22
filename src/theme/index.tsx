// material
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ComponentsOverrides from "./overrides";

interface ThemeConfigProps {
  children: React.ReactNode;
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = createTheme(themeOptions);
  theme.components = ComponentsOverrides();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
