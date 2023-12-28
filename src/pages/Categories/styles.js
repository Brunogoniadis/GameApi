import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const MainDiv = styled.div`

  padding: 20px;
  margin: 10px;
  margin-top: 12rem;
  position: relative;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .title {
      width: 940px;
      height: 100px;
      font-size: 36px;
      display: flex;
      align-items: center;
    }

    .game-wrapper{
      width: 100%;
      min-height: 120vh;
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
        width: 940px;
        margin-bottom: 15px;
        animation: ${fadeIn} 1.2s ease; 

        

        .border {
          width: 100%;
          height: 5px;
          background: linear-gradient(#650176, #650176) padding-box, linear-gradient(to top, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%), rgb(0 0 0 / 0%));
        }
      }
    }

    .grid-games {
      width: 940px;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-row-gap: 50px;
      align-items: center;
      justify-content: center;
      place-items: center; 
      
      div{
        
        transition: all 1s ease;
      }
    }
  }
`;
