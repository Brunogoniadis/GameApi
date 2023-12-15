// styles.js

import styled from 'styled-components';

export const MainDiv = styled.div`
  padding: 20px;
  margin: 10px;
  margin-top: 12rem;
  position: relative;



  .content {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .title {
      width: 50%;
      height: 100px;
      font-size: 36px;
      display: flex;
      align-items: center;
    }

    .game-group {
      margin-bottom: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;  

      .letter-header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        width: 50%;
      }
    }

    .grid-games {
      width: 100vw;
      padding-left: 30em;
      padding-right: 30em;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-row-gap: 50px;
      align-items: center;
      justify-content: start;
    }
  }
`;
