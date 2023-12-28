import styled from "styled-components";


export const FooterWrapper = styled.div`
    background-color:rgba(255, 0, 234, 0.05);
    backdrop-filter: blur(1.8rem);
    color: #fff;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30em; 
    padding-right: 30em; 
    height: 12rem;

    z-index: 1000;
    position: absolute;
    width: 100%;

    border-bottom: 1px solid transparent;
    background: linear-gradient(to bottom, rgba(255, 0, 234, 0.08) 0%, rgba(114, 0, 137, 1.0) 100%);

    padding-left: 30em;
    padding-right: 30em;

    display: flex;
    align-items: center;
    justify-content: start;

    .Logo{
    color: white;
    padding-right: 15rem ;
  }
`
