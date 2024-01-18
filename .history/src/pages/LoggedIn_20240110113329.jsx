import React from 'react'

function LoggedIn (){
    return(
    <div id="container_wrap">
        <header>
            <div id="genre_wrap">ジャンル</div>
            <div id="mix_wrap">MIX</div>
            <div id="btn">
                <div className="everyone">みんなで</div>
                <div className="ranking">ランキング</div>
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

                </div>
            </div>
        </div>
    </div>
    )
}

export default LoggedIn