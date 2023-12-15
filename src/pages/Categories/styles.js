import styled from 'styled-components';

export const MainDiv = styled.div`

  padding: 20px;
  margin: 10px;
  margin-top: 12rem;
  
  .content{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;



    
    .title{
      width: 50%;
      height: 100px;
      font-size: 36px;
      display: flex;
      align-items: center;
      
    }
    .grid-games{
      width: 100vw;
      padding-left: 30em;
    padding-right: 30em;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-row-gap: 50px;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

