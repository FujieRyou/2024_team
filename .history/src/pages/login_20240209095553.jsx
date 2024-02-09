import {accessUrl} from "./spotify"


export default function Login() {
    return (
        <div className="loginWrap">
            <div className="logoBox">
                <img src="./img/logo.svg" alt="" />
            </div>
            <a className='signBtn' href={accessUrl}>
                Login with Spotify
            </a>
        </div>
    );
}