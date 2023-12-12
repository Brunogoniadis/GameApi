import styled from 'styled-components';

export const HeaderWrapper = styled.div`
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
  position: fixed;
  top: 0;
  width:100%;

  border-bottom: 1px solid transparent;
  background: linear-gradient(to bottom, rgba(255, 0, 234, 0.08) 0%, rgba(114, 0, 137, 1.0) 100%);


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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;


  &::after {
    content: '';
    width: 150px;
    height: 5px;
    margin-top: 55px;
    transition: left 1s ease; 
    background-color: #F8CCFF;
    position: absolute;
    left: -150px; 
  }

  &:hover {
    &::after {
      left: 0; 
    }
    h3{
      color: #F8CCFF;
    }
  }
}

    h3{
      font-weight: bold;
      font-size: 18px;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export const SearchBar = styled.input`
  background-color: var(--color-primary);
  

  padding: 0.5em;
  border: none;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #F8CCFF;

  &::placeholder {
        color: #fff;
    }
`;
