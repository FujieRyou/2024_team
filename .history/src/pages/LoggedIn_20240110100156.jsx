import React from 'react'

function LoggedIn (){
    return(
<div id="container_wrap">
    <header>
        <div id="genre_wrap">ジャンル</div>
        <div id="mix_wrap">MIX</div>
        <div id="btn">
            <div class="everyone">みんなで</div>
            <div class="ranking">ランキング</div>
        </div>
    </header>
    <div id="main_img">
        <div class="scrollContent">
            <div class="scrollWrap">    
            </div>
        </div>
    
    </div>
    <div id="maincontent_wrap">
        <div id="addition_wrap">
                <h2 class="addition">次に再生</h2> 
        </div>
        <div id="songContent_wrap">
            <p class="song_num">1</p>
            <div id="song_wrap">
                <div id="singer_wrap">
                    <h2 class="songtitle">higher</h2>
                    <p class="singer">¥ellow Bucks</p>
                </div>
                <div class="song_img">
                </div>         
            </div>
        </div>
    </div>
        <div id="songContent_wrap">
            <p class="song_num">2</p>
            <div id="song_wrap">
                
                <div id="singer_wrap">
                    <h2 class="songtitle">higher</h2>
                    <p class="singer">¥ellow Bucks</p>
                </div>
                <div class="song_img">
                </div>  
            </div>
        </div>
    
        <div id="songContent_wrap">
            <p class="song_num">3</p>
            <div id="song_wrap">
                <div id="singer_wrap">
                    <h2 class="songtitle">higher</h2>
                    <p class="singer">¥ellow Bucks</p>
                </div>
                <div class="song_img">
                </div>         
            </div>
        </div>
        <div id="songContent_wrap">
            <p class="song_num">4</p>
            <div id="song_wrap">
                <div id="singer_wrap">
                    <h2 class="songtitle">higher</h2>
                    <p class="singer">¥ellow Bucks</p>
                </div>
                <div class="song_img">
                </div>         
            </div>
        </div>  
        <div class="button_wrap">
            <div class="button">
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
            <div class="button">
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
            <div class="button">
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
            <div class="button">
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
        </div>
    </div>
    )
}

export default LoggedIn