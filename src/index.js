import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import TreeMenu from './TreeMenu';


const theme = createTheme();
console.log("THEME", theme)

const ThemedTreeMenu = (props) => {
    return (
        // <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}><TreeMenu {...props} /></ThemeProvider>
        // </StyledEngineProvider>
    );
}

export default ThemedTreeMenu;