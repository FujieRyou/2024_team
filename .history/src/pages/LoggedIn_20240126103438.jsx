import React, { useState, useEffect } from 'react';
import { createCollaboPlaylist, getPlaylists, getCurrentUserId } from "./api/auth/spotify";

function LoggedIn({ token }) {
    const [playlists, setPlaylists] = useState([]);
    const [userId, setUserId] = useState(null);
    const [container,setContainer]

    // useEffect(() => {
    //     if (token) {
    //         getCurrentUserId(token).then(setUserId);
    //         getPlaylists(token).then(data => setPlaylists(data.items));
    //     }
    // }, [token]);

    // useEffect(() => {
    //     const initialPlaylistName = '新しいコラボプレイリスト';
    //     const createInitialPlaylist = async () => {
    //         if (token && userId && playlists.length === 0) {
    //             try {
    //                 const newPlaylist = await createCollaboPlaylist(token, userId, initialPlaylistName);
    //                 setPlaylists(prevPlaylists => [...prevPlaylists, newPlaylist]);
    //             } catch (error) {
    //                 console.error("プレイリスト作成中にエラーが発生しました:", error);
    //             }
    //         }
    //     };
    //     createInitialPlaylist();
    // }, [token, userId, playlists.length]);
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
            <div id="songContent_wrap">
                {/* <p className="song_num">1</p>
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
                <img src="./img/detailBtn.svg" alt="" /> */}
            </div>
        </div>
    </div>
    )
}

export default LoggedIn;