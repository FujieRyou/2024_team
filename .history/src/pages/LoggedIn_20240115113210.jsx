import React, { useState } from 'react';


async function fetchPlaylists(token) {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
const data = await response.json();
return data.items;
}

function LoggedIn ({token}){
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        if (token) {
            fetchPlaylists(token).then(setPlaylists);
        }
    }, [token]);
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
            </div>
        </div>
    </div>
    )
}

export default LoggedIn;