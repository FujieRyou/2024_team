function Navi(){
    return(
        <nav>
            <div className="iconWrap">
                <a href="">
                    <img src="./img/musicIcon.svg" alt="" />
                    <p>今すぐ聴く</p>
                </a>
            </div>
            <div className="iconWrap">
                <img src="./img/searchIcon.svg" alt="" />
                <p>検索</p>
            </div>
            <div className="iconWrap">
                <img src="./img/playlist.svg" alt="" />
                <p>プレイリスト</p>
            </div>
            <div className="iconWrap">
                <img src="./img/myPage.svg" alt="" />
                <p>マイページ</p>
            </div>
        </nav>
    )
}

export default Navi;