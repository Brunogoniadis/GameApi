
import { HomeWrapper, VideoContainer, Video, Content } from './styles';
import cityVideo from '../../../public/videos/city.mp4';
import MainCard from '../../Components/MainCard/MainCard'


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
                <section className="main-section">
                    <div className='main-title'>
                        <h3>
                            Recommended
                        </h3>
                    </div>
                    <div className='recommended-games'>
                        <div className="left-wrapper">
                            <MainCard variant="main"/>

                        </div>
                        <div className='right-wrapper'>
                            <h2 className='title-text'>
                                More recommended
                            </h2>
                            <div className="others-container">
                                
                                <MainCard variant="mini" />

                                <MainCard variant="mini"/>

                                <MainCard variant="mini"/>

                                <MainCard variant="mini"/>

                            </div>
                        </div>
                    </div>
                </section>

            </Content>
        </HomeWrapper>
    );
}


export default Home