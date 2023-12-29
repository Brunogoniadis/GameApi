import styled from 'styled-components';

export const HeaderWrapper = styled.div`

  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  
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

export const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f8ccff;
  width: 240px;
  background-color: var(--color-primary);
  border-radius: 5px;
  position: relative;

  .input-style {
    background-color: var(--color-primary);
    padding: 0.5em;
    border: none;
    height: 50px;
    width: 190px;
    border-radius: 5px;

    &::placeholder {
      color: #fff;
    }
  }

  .button-style {
    background-color: var(--color-primary);
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    background-color: red;
    cursor: pointer;
  }

  .suggestions-wrapper {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0px;

    transform: translateY(0); 
    background-color: #503d50;


    margin-top: 2px;
    .suggestion-container {
      height: 60px; /* Ajuste a altura conforme necessário */
      width: 430px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 7px 0px #000;
      border: 1px solid var(--color-border);

      z-index: 1001;
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px; /* Borda arredondada para a imagem */
        object-fit: cover;
      }

      .name {
        font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
        color: #ffffff; /* Cor do texto */
        text-align: start;
      }
    }

  }
  .outsideDiv {
    position: fixed;
    width: 10000px;
    height: 10000px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    z-index: 950;
    }
`;