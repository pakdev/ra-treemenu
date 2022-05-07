import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import TreeMenu from './TreeMenu';

const theme = createTheme();

const ThemedTreeMenu = (props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}><TreeMenu {...props} /></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ThemedTreeMenu;