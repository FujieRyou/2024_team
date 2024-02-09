import React, { useState, useEffect } from 'react';
import { createCollaboPlaylist, getPlaylists, getCurrentUserId } from "./spotify";
import Scroll2 from './components/musicSlide';
import NowMusic from './components/nowMusic';

function LoggedIn({ token }) {
    const [playlists, setPlaylists] = useState([]);
    const [userId, setUserId] = useState(null);
    const [container,setContainer] = useState([])

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
                    <img src="./img/myIcon.svg" alt="" />
                </a>
            </div>
        </header>
        <div id="main_img">
            <Scroll2 />

        </div>
        <div id="maincontent_wrap">
            <div id="addition_wrap">
                    <p className='addition'>次に再生<br/><span>リアルタイムでみんなで聴こう</span></p>
                    <a href="">
                        <img src="./img/plusBtn.svg" alt="" />
                    </a>
            </div>
            <div id="songContent_wrap">
                <p className="song_num">1</p>
                <div id="song_wrap">
                    <div className="song_img">
                        <img src="/img/scroll.webp" alt="" />
                    </div>         
                    <div id="singer_wrap">
                        <p className="songtitle">魂のルフラン</p>
                        <p className="singer">バナージリンクス</p>
                    </div>
                </div>
                <div className='contributor'>
                    <img src="" alt="" />
                    <p>ナナシ</p>
                </div>
                <img src="./img/detailBtn.svg" alt="" />
            </div>
            <div id="songContent_wrap">
                <p className="song_num">1</p>
                <div id="song_wrap">
                    <div className="song_img">
                        <img src="/img/scroll2.webp" alt="" />
                    </div>         
                    <div id="singer_wrap">
                        <p className="songtitle">よっしゃあ漢唄</p>
                        <p className="singer">角田 信郎</p>
                    </div>
                </div>
                <div className='contributor'>
                    <img src="" alt="" />
                    <p>ナナシ</p>
                </div>
                <img src="./img/detailBtn.svg" alt="" />
            </div>
            <div id="songContent_wrap">
                <p className="song_num">1</p>
                <div id="song_wrap">
                    <div className="song_img">
                        <img src="/img/scroll3.webp" alt="" />
                    </div>         
                    <div id="singer_wrap">
                        <p className="songtitle">GEN!!GEN!!GEN!!</p>
                        <p className="singer">ケンシロウ</p>
                    </div>
                </div>
                <div className='contributor'>
                    <img src="" alt="" />
                    <p>ナナシ</p>
                </div>
                <img src="./img/detailBtn.svg" alt="" />
            </div>
            <div id="songContent_wrap">
                <p className="song_num">1</p>
                <div id="song_wrap">
                    <div className="song_img">
                        <img src="/img/scroll4.webp" alt="" />
                    </div>         
                    <div id="singer_wrap">
                        <p className="songtitle">愛をとりもどせ</p>
                        <p className="singer">アイムジャグラー</p>
                    </div>
                </div>
                <div className='contributor'>
                    <img src="" alt="" />
                    <p>ナナシ</p>
                </div>
                <img src="./img/detailBtn.svg" alt="" />
            </div>
            <NowMusic />
        </div>
    </div>
    )
}

export default LoggedIn;