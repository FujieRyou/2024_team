import {accessUrl} from "./api/auth/spotify"


export default function Login() {
    return (
        <div className="loginWrap">
            <div className="logoBox">
                <p>ロゴ</p>
            </div>
            <h2 className="appName">muve</h2>
            <a className='signBtn' href={accessUrl}>
                Login with Spotify
            </a>
        </div>
    );
}