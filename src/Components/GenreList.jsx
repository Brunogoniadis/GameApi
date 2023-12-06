import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'

function GenreList() {

    useEffect(() => {
        getGenreList();
    }, [])


    const getGenreList = async () => {
        try {
            const response = await GlobalApi();  // Chame a função como uma função assíncrona
            console.log(response.data);  // Acesse os dados da resposta
        } catch (error) {
            console.error('Erro ao obter a lista de gêneros:', error);
        }
    };


    return (
        <div>GenreList ---</div>
    )
}

export default GenreList