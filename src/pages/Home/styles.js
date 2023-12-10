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
  align-items: center;
  justify-content: center;

  .BannerWrapper{
    width: 1358px;
    height: 520px;
    background: rgba(0, 0, 0, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(1rem);

  }
  .banner-container{
    width: 1150px;
    height: 400px;
    background-image: url(${mainBanner});
  background-size: cover;
  background-position: center;
  }
`;