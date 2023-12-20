import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-text: #FFFFFF;
    --color-text-in-primary: #000000;
    --color-primary: #3f0d47;
    --color-secondary: #310A27;
    --color-tertiary: #102542;
    --color-border-secondary: #F8CCFF;
    --color-border: rgba(255, 255, 255, 0.2);

    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
    --color-background-main: #351D51;


    

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:15px;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    
    &:after {
    content: '';
    position: fixed;
    bottom: 0%;
    left: 50%; 
    right: 50%; 
    transform: translateX(-50%); 
    z-index: -1;

    height: 100%;
    width: 100%;
    background: radial-gradient(circle at bottom, var(--color-secondary), var(--color-background-main) 60%);
  }
  }

  body {

    font-family: 'Inter', sans-serif;

    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    overflow-y: overlay;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, strong{
    font-weight: 500;
  }

  h1{
    font-size: 28px;
  }
  h2{
    font-size: 20px;
  }
  h3{
    font-size: 14px;
  }
  h4{
    font-size: 12px;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
`;
