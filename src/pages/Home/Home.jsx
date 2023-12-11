
import { HomeWrapper, VideoContainer, Video, Content } from './styles';
import cityVideo from '../../../public/videos/city.mp4';

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
                            <button className='principal-recommended'>

                                <div class="overlay"></div>
                                <h2>
                                    The Last of Us
                                </h2>
                            </button>

                        </div>
                        <div className='right-wrapper'>
                            <h2 className='title-text'>
                                More recommended
                            </h2>
                            <div className="others-container">
                                <button className="principal-recommended"
                                    style={{
                                        backgroundImage: 'url("https://s2-techtudo.glbimg.com/Y-E7sRj2IYNYFmNpLwYBa3SmoL8=/0x0:988x552/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/M/7/1SoLb7TR617hqy3OTsyg/captura-de-tela-2018-04-16-as-18.10.38.png")'
                                    }}
                                >
                                    <div class="overlay"></div><h2>Yakuza 0</h2>
                                </button>
                                <button className="principal-recommended"
                                    style={{
                                        backgroundImage: 'url("https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg?t=1697654297")'
                                    }}
                                >
                                    <div class="overlay"></div>
                                    <h2>Far Cry 5</h2>

                                </button>
                                <button className="principal-recommended"
                                    style={{
                                        backgroundImage: 'url("https://lh4.googleusercontent.com/NrCdjxo-t75CpWhj8DLFe1zkS-_y1pPoF5g1s3g0dqho0tv9x_amopU1g2167pfhNeAKghP6qt5yfLkCZLV8jLXRJCvYY9g9fVy7dJnOBuQSLysdpf7MheSQTi8-CCK-s_dDAvNU")'
                                    }}
                                >
                                    <div class="overlay"></div>
                                    <h2>LaraCroft</h2>

                                </button>
                                <button className="principal-recommended"
                                    style={{
                                        backgroundImage: 'url("https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/best-action-adventure-games-2022.jpg")'
                                    }}
                                >
                                    <div class="overlay"></div>
                                    <h2>Star Wars</h2>

                                </button>

                            </div>
                        </div>
                    </div>
                </section>

            </Content>
        </HomeWrapper>
    );
}


export default Home