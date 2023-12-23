
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/Categories/Category';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';
import Game from './pages/Game/Game'
import GlobalStyle from './GlobalStyle';
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path='/category/:categoryId/:categoryName/:gameId' element={<Game />} />

          <Route path="/category/:categoryId/:categoryName" element={<Category />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
