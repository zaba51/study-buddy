import { createGlobalStyle } from 'styled-components';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
    
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;