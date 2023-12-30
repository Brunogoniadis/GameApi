import React, { useEffect, useState } from "react";
import { SearchBarStyle } from "./styles";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Search({ onChange }) {
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
        setSearchTerm('')
    }

    useEffect(() => {
        console.log("searchGames", searchGames)
    }, [])

    return (
        <SearchBarStyle>
            <input
                className="input-style"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games"
            />
            <button className="button-style" onClick={handleSearch}/>
            <div className="suggestions-wrapper">
                {searchGames.map((game) => (
                    <>
                        <Link
                            to={`/${game.id}`}
                            onClick={() => { clearDataSearch() }}
                            className="suggestion-container" key={game.id}>
                            <img src={game.background_image} alt={game.name} />
                            <div className="name">{game.name}</div>
                        </Link>
                    </>
                ))}
                {searchGames.length > 0 && (
                    <button className="outsideDiv" onClick={() => { clearDataSearch() }} />
                )}
            </div>
        </SearchBarStyle>
    );
}

export default Search