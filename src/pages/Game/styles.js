import styled from 'styled-components';

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
        margin-top: 25px
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
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 7px 0px #000;
        border: 2px solid var(--color-border);        margin-top: 20px;
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
            width: 18%;
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
