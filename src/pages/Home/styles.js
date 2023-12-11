import styled from "styled-components";
import mainBanner from '../../assets/mainBanner.png';


export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  margin-top: 12rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  width: 100%;
  height: 100%;
  backdrop-filter: blur(1rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

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
    height: 100%;
    background-image: url(${mainBanner});
    background-size: cover;
    background-position: center;


  }


  .main-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-title{
      width: 75%;
      height: 10%;
      align-self: center;
      text-align: start;
      display: flex;
      align-items: center;

      h3{
        font-weight: bold;
      }
    }
  }

  .recommended-games{
    width: 75%;
    height:  42rem;
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
    .principal-recommended{
      width: 85%;
      height: 355px;
      background-image: url('https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png');
      background-size: cover; 
      background-position: center;


/*       clip-path: polygon(100% 92%, 86% 100%, 0 100%, 0 8%, 14% 0, 100% 0);
 */
      border-radius: 10px;
      border: 1px transparent;

      overflow: hidden; 
      position: relative;
      object-fit: cover;
      transition: filter 0.3s ease; 
      h2{
        font-size: 36px;
        margin-top: 5rem;
        margin-right:  40rem;
        font-weight: bold;
        transform: translateX(-90%); 
        transition: transform 0.3s ease;
        z-index: 500;
        color: white;
      }

    }

    .principal-recommended:hover .overlay {
  opacity: 1;
}

.principal-recommended:hover h2 {
  transform: translateX(0);
}

.overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%);
  
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;

}
.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  border: 5px solid transparent;
  background: linear-gradient(45deg, transparent, #750288) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
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
        .principal-recommended{
          background-size: cover; 
          background-position: center;
          color:red;
          width: 35%;
          height: 100px;
          margin: 10px;
          border-radius: 10px;
          position: relative;
          border: 1px transparent;
          h2{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            font-size: 18px;
            width: 150px;
            font-weight: lighter;
            text-align: start;
            color: white;
            margin-left: 2rem;
            transform: translateX(-200px); 
          }
        }

        .principal-recommended:hover h2{
          transform: translateX(-0px); 

        }
      }
    }

  }
`;