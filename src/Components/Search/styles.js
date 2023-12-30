import styled from 'styled-components';

export const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f8ccff;
  width: 240px;
  height: 30px;
  background-color: var(--color-primary);
  border-radius: 5px;
  position: relative;

  .input-style {
    background-color: var(--color-primary);
    padding: 0.5em;
    border: none;
    height: 28px;
    width: 190px;
    border-radius: 5px;

    color: white;
    &::placeholder {
      color: #fff;
    }
  }

  .button-style {
    background: url('https://www.svgrepo.com/show/7109/search.svg') center center no-repeat;
    color: #fff;
    background-size: 60%;
    padding: 0.5em 1em;
    border: none;
    height: 28px;
    width: 28px;
    background-color: #a159a1;
    border-radius: 5px;
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

      &:hover{
        background-color: #6d0384;
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
    cursor: context-menu;
    }
`;