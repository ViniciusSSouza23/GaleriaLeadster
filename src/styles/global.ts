import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
    :root{
        --background-header: #363636;
        --background-body: #DCDCDC	;

    }
    *{
        margin: 0;
        padding: 0;
        
        
    }
    body{
        font-family: 'Roboto', sans-serif;
        background: var(--background-body);
        -webkit-font-smoothing: antialiased;
    }
    html{
        @media(max-width:1080px)
        {
            font-size: 93.75%;
        }
        @media(max-width:720px)
        {
            font-size: 82.5%;
        }
    }
    button{
        cursor: pointer;
    }
    h1,h2,h3,h3,h5,h6,strong{
        font-weight: 600;
    }
`;