import styled from 'styled-components';

export const HeaderWrapper = styled.div`

  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  
  z-index: 1000;
  top: 0;
  
  color: #fff;
  background-color: #6d0384;
  backdrop-filter: blur(1.8rem);
  border-bottom: 1px solid transparent;

  .MainContainer{
    width: 940px;
    height: auto;
    display: flex;
    align-items: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 940px;

  .Logo {
    color: white;
    padding-right: 15rem;
    background-image: url('../../../src/assets/reactSlogan.svg');
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
      width: 50px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 1em;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 150px;
    

    &:hover {

      .category-menu{
          opacity: 1;
          visibility:visible;
      }


      &::after {
        width: 100%;

      }

      h3 {
        color: #f8ccff;
      }

    }

    &::after {
      
      content: '';
      width: 0%;
      height: 5px;
      margin-top: 55px;
      transition: all 1s ease;
      background-color: #f8ccff;
      position: absolute;
      left: 0px;
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }


  .category-menu {
    opacity: 0;
    visibility:hidden;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #710089;
    border-radius: 2px;
    padding: 16%;
    transition: all 0.3s ease;
    display: grid;
    grid-template-columns: auto;
    flex-direction: column;
    box-shadow: 8px 8px 4px -5px rgba(0,0,0,0.5);
    height: 550px;
    gap: 1%;

    .li-category{
      color: white;
      height: 26px;
      margin-bottom: 2%;
    }




}
`;
