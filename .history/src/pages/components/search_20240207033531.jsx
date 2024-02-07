import React, { useState } from 'react';
import { searchTracks } from '../spotify';

export default function Search({ token }) {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [genreButtons, setGenreButtons] = useState(true);

    const handleSearch = async (e) => {
        const inputText = e.target.value;
        setQuery(inputText);
        if (inputText.trim() !== "") {
            setGenreButtons(false);
            try {
                const results = await searchTracks(token, inputText);
                setSearchResults(results.tracks.items);
                console.log(results);
            } catch (error) {
                console.error("検索中にエラーが発生しました:", error);
                setSearchResults([]); 
            }
        } else {
            setGenreButtons(true);
            setSearchResults([]); 
        }
    };

    return (
        <div>
            <div className='searchWrap'>
                <input type="text" className='searchTxt' value={query} onChange={handleSearch} placeholder="検索" />
            </div>
            {genreButtons && (
                <div className='genreWrap'>
                    <p>ジャンル</p>
                    <div className='genruBtnWrap'>
                        <button>K-POP</button>
                        <button>J-POP</button>
                        <button>HIPPOP</button>
                        <button>R&B</button>
                        <button>ロック</button>
                        <button>メタル</button>
                        <button>ファンク</button>
                        <button>ブルース</button>
                        <button>オルタナティブ</button>
                        <button>パーティー</button>
                        <button>ジャズ</button>
                        <button>クラシック</button>
                        <button>ヴァルヴレイヴ</button>
                    </div>
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

