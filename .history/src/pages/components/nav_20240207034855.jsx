function Navi({ navigate }){
    return(
        <nav>
            <div className="iconWrap">
                <div onClick={() => navigate('loggedin')}>
                    <img src="./img/musicIcon.svg" alt="" />
                    <p>今すぐ聴く</p>
                </div>
            </div>
            <div className="iconWrap">
                <div onClick={() => navigate('search')}>
                    <img src="./img/searchIcon.svg" alt="" />
                    <p>検索</p>
                </div>
            </div>
            <div className="iconWrap">
                <a href="">
                    <img src="./img/playlist.svg" alt="" />
                    <p>プレイリスト</p>
                </a>
            </div>
            <div className="iconWrap">
                <a href="">
                    <img src="./img/myPage.svg" alt="" />
                    <p>マイページ</p>
                </a>
            </div>
        </nav>
    )
}

export default Navi;