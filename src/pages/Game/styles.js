import styled, { keyframes } from "styled-components";



const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const blurIn = keyframes`
    0% {
        filter: blur(10px);
    }
    100% {
        filter: blur(0);
    }
`;


export const CenterWrapper = styled.div`
  width: 80%;
  height: 470px;
  max-width: 965px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 7px 0px #000;
  border: 2px solid var(--color-border);
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : 'none')};
  margin-top: 20px;
  position: relative;




  .overlay{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;

  }

        

        .images-wrapper {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            animation:  ${fadeIn} 2s ease; 

            .principal-image-container {

                border-radius: 10px;
                object-fit: cover;
                width: 542px;
                height: 310px;
            
                animation: ${blurIn} 4s ease, ${fadeIn} 1s ease; 
                border: 1px solid #515151;
                transition: width 0.5s ease, height 0.5s ease; 

            }

            .others-image-grid {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                transition: height 0ms.4 ease;

                height:72px;
                img {


                    width: 100%;
                    height: 72px;
                    width: 125px;

                    object-fit: cover;
                    border-radius: 10px;

                    border: 1px solid #515151;
                    animation: opacity 2s ease; 
                }

                @keyframes opacity {
                0% {
                    opacity: 0;
                }
                50%{
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                }
            }
        }

        .descriptions-container {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 1%;
            color: #ffffff;

            p {
                font-size: 16px;
            }

           
        }
    
`
export const GameWrapper = styled.div`

    margin-top: 12rem;

    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative; /* Adicionado para posicionar o pseudo-elemento corretamente */
    overflow: auto;
    position: relative;
    z-index: 500;


    &::after {
        content: '';

        

        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;

        display: block;

        background-size:cover;
        width: 100%;
        height: 100%;

        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
        z-index:1;
        filter:opacity(25%);

        z-index: -1;
    }




    .title {
        width: 966px;
        margin-bottom: 2%;
        color: #ffffff; /* Cor do texto */
        font-size: 24px;
        font-weight: bold;
        margin-top: 25px
    }





    .misc-infos-wrapper{
        width: 80%;
        max-width: 965px;
        height: 180px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
        margin-top: 62px;
        

        
        .misc-info-container{
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content:space-between;
            width: 15%;
            height:90%;

            padding:10px;


            background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 7px 0px #000;
    border: 2px solid var(--color-border);
            border-radius:10px;


            .title-misc{
                height:10%;
                text-align: center;
            }
            .content{
                height:90%;
                display: flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;

                img{
                    width:75px;

                }
                a{
                    font-size:12px
                }
            }
            .score{
                border-radius: 0.4rem;
                box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);
                width:75px;
                height:75px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.25rem;
                line-height: 2.5rem;
                font-weight: bold;
            }
        }
    }
`;
