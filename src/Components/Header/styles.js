import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color:rgba(255, 0, 234, 0.05);
  backdrop-filter: blur(1.5rem);
  color: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16em; 
  padding-right: 16em; 
  height: 12rem;

  z-index: 1000;
  position: fixed;
  top: 0;
  width:100%;



  `;

export const Navigation = styled.nav`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  .Logo{
    color: white;
    padding-right: 15rem ;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;


    li {
      margin: 0 1em;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export const SearchBar = styled.input`
  padding: 0.5em;
  border: none;

`;
