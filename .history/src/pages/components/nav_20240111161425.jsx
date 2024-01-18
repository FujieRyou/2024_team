import LoggedIn from "../loggedIn";
import Search from "./search";
import Link from "next/link";

function Navi(){
    return(
        <nav>
            <div className="iconWrap">
                <Link href={LoggedIn}>
                    <img src="./img/musicIcon.svg" alt="" />
                    <p>今すぐ聴く</p>
                </Link>
            </div>
            <div className="iconWrap">
                <Link href={Search}>
                    <img src="./img/searchIcon.svg" alt="" />
                    <p>検索</p>
                </Link>
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