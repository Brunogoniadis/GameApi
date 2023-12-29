// Importe as bibliotecas e componentes necessários
import React, { useEffect, useState } from "react";
import { HeaderWrapper, Navigation, SearchBarStyle } from "./styles";
import GlobalAPI from "../../services/GlobalApi";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function SearchBar({ onChange, setSearchGames }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGames, setSearchGamesLocal] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (onChange) {
      onChange(searchTerm, setSearchGamesLocal);
    }
  };

  useEffect(() => {
    clearDataSearch
  }, [navigate]);

  const clearDataSearch = () => {
    setSearchGamesLocal([]);
    setSearchTerm([])
  }


  return (
    <SearchBarStyle>
      <input
        className="input-style"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search games"
      />
      <button className="button-style" onClick={handleSearch} />

      <div className="suggestions-wrapper">
        {searchGames.map((game) => (
          <>
            <div className="suggestion-container" key={game.id}>
              <img src={game.background_image} alt={game.name} />
              <div className="name">{game.name}</div>
            </div>
          </>
        ))}
        {searchGames.length > 0 && (
          <button className="outsideDiv" onClick={()=>{clearDataSearch()}}/>
        )}
      </div>
    </SearchBarStyle>
  );
}



function Header() {
  const globalAPI = new GlobalAPI();
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    globalAPI.getGenreList().then(response => {
      setGenreList(response.data.results);
    });
  }, []);

  console.log("RESULT", genreList);

  const handleSearch = async (query, setSearchGamesLocal) => {
    try {
      const searchResults = await globalAPI.searchGames(query);
      setSearchGamesLocal(searchResults.data.results);
      console.log('Resultados da busca:', searchResults.data.results);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <HeaderWrapper>
      <div className="MainContainer">
        <Navigation>
          <div className="Logo"><h1>Logo</h1></div>
          <ul>
            <li>
              <a href="#">
                <h3>Category</h3>
                <div className="category-menu">
                  {genreList.map(genre => (
                    <Link
                      className="link-class"
                      to={`/Category/${genre.id.toString()}/${encodeURIComponent(genre.name)}`}
                      key={genre.id}>
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </a>
            </li>
            <li><a href="#"><h3>Community</h3></a></li>
            <li><a href="#"><h3>About</h3></a></li>
          </ul>
        </Navigation>
        {/* Passe a função de busca e setSearchGames como propriedades para o componente SearchBar */}
        <SearchBar onChange={handleSearch} />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
