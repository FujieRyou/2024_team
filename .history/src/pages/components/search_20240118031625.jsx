import React, { useState, useEffect } from 'react';
import { searchTracks } from '../spotify';

export default function Search({ token }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [genreButtons, setGenreButtons] = useState(true);

  useEffect(() => {
    if (query.trim() !== "") {
      setGenreButtons(false);
      performSearch();
    } else {
      setGenreButtons(true);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const performSearch = async () => {
    try {
      const results = await searchTracks(token, query);
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error("検索中にエラーが発生しました:", error);
    }
  };

  return (
    <div>
      <div className='searchWrap'>
        <input type="text" className='searchTxt' value={query} onChange={handleInputChange} placeholder="検索" />
      </div>
      {genreButtons && (
        <div className='genreWrap'>
          {/* ジャンルボタンのリスト */}
        </div>
      )}
      <div>
        {searchResults.map((track) => (
          <div key={track.id} className='searchResults'>
            <img src={track.album.images[0].url} alt="" className='searchResultsImg' />
            <div className='searchResultsTxt'>
                <p>{track.name}</p>
                <p>アーティスト: {track.artists.map((artist) => artist.name).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
