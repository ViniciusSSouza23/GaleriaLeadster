import styled from "styled-components";


export const Container = styled.footer`
    background: var(--background-header);
    bottom: 0;
   // position: fixed;
    width: 100%;
    height: 5rem;
    color: #fff;
    
    
     .whatsapp
    {
        color:  #34af23;
        transition: filter 0.2s;
        &:hover
        {
            filter: brightness(0.5);
        }
    }
    .instagram
    {
        color: #DD2a7b;
        transition: filter 0.2s;
        &:hover
        {
            filter: brightness(0.5);
        }

    }
    .linkedin
    {
        color: blue;
        transition: filter 0.2s;
        &:hover
        {
            filter: brightness(0.5);
        }
    }
    .git
    {
        color: #171515;
        transition: filter 0.2s;
        &:hover
        {
            filter: brightness(0.5);
        }
    }
    div
    {
        display: flex;
        justify-content: center;
        
    }
    div p{
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }
    div a{
        margin-left: 0.8rem;
    }
    
`;