import React from "react";
import { HeaderWrapper, Navigation, SearchBar } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <div className="Logo"><h1>Logo</h1></div>
        <ul>
          <li><a href="#"><h3>Category</h3></a></li>

          <li><a href="#"><h3>Community</h3></a></li>
          <li><a href="#"><h3>About</h3></a></li>
        </ul>
      </Navigation>
      <SearchBar type="text" placeholder="Search"  />
    </HeaderWrapper>
  );
}

export default Header;
