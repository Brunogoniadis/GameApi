import styled from "styled-components";
import mainBanner from '../../assets/mainBanner.png';
import mainBackground from '../../assets/MainBackground.png'

export const HomeWrapper = styled.div`

  width: 100%;
  height: 100%;
  
  
  display: flex;
  flex-direction: column;
  align-items: center;



  .Content{
  margin-top: 12rem;
  top: 50%;
  left: 50%;
  text-align: center;
  color: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-position: center;
  background-size: cover;
  background-position: center;
  background-image: url(${mainBackground});

  .BannerWrapper{
    width: 100%;
    height: 520px;
    background: rgba(0, 0, 0, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(1rem);
    


  }
  .banner-container{

    width: 100%;
    height: 520px;    
    background-image: url(${mainBanner});
    background-size: cover;
    background-position: center;


  }




  .recommended-games{
    width: 940px;
    height: 380px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 7px 0px #000;
    border: 2px solid var(--color-border);
    border-radius: 5px;

    .left-wrapper{
      width: 65%;
      height: 355px;
      display: flex;
      align-items: center;
      justify-content: center;
    }








    .right-wrapper{
      width: 35%;
      height: 85%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title-text{
        
        text-align:start;
        width: 75%;
        height: 100%;
      }

      .others-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 5px;
      }
    }

  }


}
.main-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    gap: 15px;
    
    .main-title{
      width: 940px;
      height: 15%;
      align-self: center;
      text-align: start;
      display: flex;
      align-items: center;

      h3{
        font-weight: bold;
        width: 100%;
      }
    }
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

    
  background-position: center;
  background-size: cover;
  background-position: center;
  background-image: url(${mainBackground});
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  filter: blur(1rem);
`;

