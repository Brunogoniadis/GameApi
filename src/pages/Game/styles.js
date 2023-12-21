import styled from 'styled-components';

export const GameWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; /* Adicionado para posicionar o pseudo-elemento corretamente */
    overflow: auto;
    position: relative;
    z-index: 500;

    gap: 50px;

    &::after {
        content: '';

        
        background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : 'none')};

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
        filter:opacity(25%)

    }




    .title {
        width: 50%;
        margin-bottom: 2%;
        color: #ffffff; /* Cor do texto */
        font-size: 24px;
        font-weight: bold;
    }

    div{
        z-index: 500;
    }

    .center-wrapper {
        width: 80%;
        max-width: 965px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-radius: 10px;
        background-color: #2e3a4e; /* Cor de fundo do centro */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        border: 2px solid #34495e; /* Cor da borda */
        margin-top: 20px;
        .images-wrapper {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            .principal-image-container {

                border-radius: 10px;
                object-fit: cover;
                width: 542px;
                height: 310px;
            }

            .others-image-grid {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                img {
                    width: 100%;
                    height: 72px;
                    object-fit: cover;
                    border-radius: 10px;
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
    }

    .misc-infos-wrapper{
        width: 80%;
        max-width: 965px;
        height: 150px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
        background-color:red;

        .misc-info-container{
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            width: 10%;

            background-color: green;
            .title-misc{
                height:10%;
                text-align: center;
            }
            .content{
                height:90%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;
