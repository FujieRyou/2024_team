import playIcon from "img/musicIcon.png"

function Navi(){
    return(
        <nav>
            <div>
                <img src={playIcon} alt="" />
                <p>今すぐ聴く</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>検索</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>プレイリスト</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>マイページ</p>
            </div>
        </nav>
    )
}

export default Navi;