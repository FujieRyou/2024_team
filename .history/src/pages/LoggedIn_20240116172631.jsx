import React, { useState,useEffect } from 'react';
import {getPlaylists , createCollaboPlaylist} from "./spotify"

function LoggedIn ({token}){
    const [playlists, setPlaylists] = useState([]);
    const [newPlaylistName, setNewPlaylistName] = useState('');
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        if (token) {
            // ユーザーIDを取得
            getCurrentUserId(token).then(setUserId);
            // プレイリストを取得
            getPlaylists(token).then(data => setPlaylists(data.items));
        }
    }, [token]);

    const handleCreatePlaylist = async () => {
        if (!newPlaylistName || !userId) return;
        const newPlaylist = await createCollaboPlaylist(token, userId, newPlaylistName);
        setPlaylists([...playlists, newPlaylist]);
        setNewPlaylistName('');
    };

    return(
    <div id="container_wrap">
        <header>
            <div><p className='genre_wrap'>ジャンル<br/>MIX</p></div>
            <div className="switchingBtn">
                <div className="everyone">みんなで</div>
                <div className="ranking">ランキング</div>
            </div>
            <div className='myPageIcon'>
                <a href="">
                    <img src="" alt="" />
                </a>
            </div>
        </header>
        <div id="main_img">
            <div className="scrollContent">
                <div className="scrollWrap">    
                </div>
            </div>

        </div>
        <div id="maincontent_wrap">
            <div id="addition_wrap">
                    <p className='addition'>次に再生<br/><span>リアルタイムでみんなで聴こう</span></p>
                    <a href="">
                        <img src="./img/plusBtn.svg" alt="" />
                    </a>
            </div>
            <div>
                <input type="text" value={newPlaylistName} onChange={(e) => setNewPlaylistName(e.target.value)} placeholder="新しいプレイリスト名" />
                <button onClick={handleCreatePlaylist}>コラボプレイリストを作成</button>
            </div>
            <div id="playlist_wrap">
                <h2>マイプレイリスト</h2>
                <ul>
                    {playlists.map(playlist => (
                        <li key={playlist.id}>
                            <div>{newPlaylistName}</div>
                            {/* プレイリスト編集機能をここに追加 */}
                        </li>
                    ))}
                    <li>鼻くそ</li>

                </ul>
            </div>
            {/* <div id="songContent_wrap">
                <p className="song_num">1</p>
                <div id="song_wrap">
                    <div className="song_img">
                    </div>         
                    <div id="singer_wrap">
                        <p className="songtitle">higher</p>
                        <p className="singer">¥ellow Bucks</p>
                    </div>
                </div>
                <div className='contributor'>
                    <img src="" alt="" />
                    <p>ナナシ</p>
                </div>
                <img src="./img/detailBtn.svg" alt="" />
            </div> */}
        </div>
    </div>
    )
}

export default LoggedIn;