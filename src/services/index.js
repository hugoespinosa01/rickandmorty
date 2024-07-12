import axios from '../lib/axios'
import React from 'react';

const useGetCharacters = (page) => {
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        axios.get(`/api/character?page=${page}`).then((res) => {
            setCharacters(res.data);
        });
    }, [page])

    return characters;
}

export {useGetCharacters}