import React, { useEffect, useState } from "react";
import { HeaderWrapper, Navigation, SearchBar } from "./styles";
import GlobalAPI from "../../services/GlobalApi";
import { Link } from 'react-router-dom'


function Header() {

  const globalAPI = new GlobalAPI();

  const [genreList, setGenreList] = useState([]);

  useEffect(() => {

    globalAPI.getGenreList().then(response => {
      setGenreList(response.data.results);
    });

  }, []);


  console.log("RESULT", genreList)



  return (
    <HeaderWrapper>
      <Navigation>
        <div className="Logo"><h1>Logo</h1></div>
        <ul>
          <li><a href="#"><h3>Category</h3>

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
          </a></li>

          <li><a href="#"><h3>Community</h3></a></li>
          <li><a href="#"><h3>About</h3></a></li>
        </ul>
      </Navigation>
      <SearchBar type="text" placeholder="Search" />
    </HeaderWrapper>
  );
}

export default Header;
