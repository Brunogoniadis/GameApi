
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import MainHeader from './Components/Header/Header.tsx';
import GlobalStyle from './GlobalStyle';
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
