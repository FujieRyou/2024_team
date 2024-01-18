import {accessUrl} from "./spotify"


export default function Login() {
    return (
        <div className="loginWrap">
            <div className="logoBox"></div>
            <h2>muve</h2>
            <a className='signBtn' href={accessUrl}>
                Login with Spotify
            </a>
        </div>
    );
}