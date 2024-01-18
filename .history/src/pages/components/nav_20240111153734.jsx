import { Link } from 'react-router-dom';

function Navi(){
    return(
        <nav>
            <div className="iconWrap">
                <Link to="/loggedIn">
                    <img src="./img/musicIcon.svg" alt="" />
                    <p>今すぐ聴く</p>
                </Link>
            </div>
            <div className="iconWrap">
                <Link to="/search">
                    <img src="./img/searchIcon.svg" alt="" />
                    <p>検索</p>
                </Link>
            </div>
            <div className="iconWrap">
                <Link to="/">
                    <img src="./img/playlist.svg" alt="" />
                    <p>プレイリスト</p>
                </Link>
            </div>
            <div className="iconWrap">
                <Link to="/">
                    <img src="./img/myPage.svg" alt="" />
                    <p>マイページ</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navi;