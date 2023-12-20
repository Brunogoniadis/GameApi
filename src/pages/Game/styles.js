import styled from 'styled-components';

export const GameWrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title{
        width: 50%;
        height: auto;
    }

    .center-wrapper{
        width: 50%;
        height: 512px;

        display: flex;
        flex-direction: row;
        
        .images-wrapper{
            width: 60%;
            display: flex;
            flex-direction: column;

            .principal-image-container{
                width: 100%;
                height: 80%;
                object-fit: cover;
            }
            .others-image-grid{
                display: grid;
                grid-template-columns: auto auto auto auto;
            }

        }
        .descriptions-container{
            width: 40%;
        }
    }
`
