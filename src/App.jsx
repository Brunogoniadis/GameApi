
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import MainHeader from './Components/Header/Header.tsx';
import GlobalStyle from './GlobalStyle';

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
      </Router>
    </>
  );
}

export default App;
