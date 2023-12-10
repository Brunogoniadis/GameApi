import React from "react";
import { HeaderWrapper, Navigation, SearchBar } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <div className="Logo"><h1>Logo</h1></div>
        <ul>
          <li><a href="#"><h3>Categorias</h3></a></li>

          <li><a href="#"><h3>Comunidade</h3></a></li>
          <li><a href="#"><h3>Sobre</h3></a></li>
        </ul>
      </Navigation>
      <SearchBar type="text" placeholder="Pesquisar..." />
    </HeaderWrapper>
  );
}

export default Header;
