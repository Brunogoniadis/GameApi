
import { HomeWrapper, VideoContainer, Video, Content } from './styles';
import cityVideo  from '../../../public/videos/city.mp4';

function Home() {
    return (
        <HomeWrapper>
            <VideoContainer>
                <Video autoPlay muted loop>
                    <source src={cityVideo} type="video/mp4" />
                </Video>
            </VideoContainer>
            <Content>
                <div className="BannerWrapper">
                    <div className="banner-container">

                    </div>
                </div>
            </Content>
        </HomeWrapper>
    );
}


export default Home