import {accessUrl} from "./spotify"


export default function Login() {
    return (
        <div className="loginWrap">
            <div className="logoBox">
                {/* <img src="./img/logo.svg" alt="" /> */}
            </div>
            <h2 className="appName">muve</h2>
            <a className='signBtn' href={accessUrl}>
                Login with Spotify
            </a>
        </div>
    );
}