import {accessUrl} from "./spotify"

export default function Login() {
    return (
        <div className="loginWrap">
            <h2>muve</h2>
            <p>テキストテキストテキストテキストテキスト</p>
            <a className='signBtn' href={accessUrl}>
                Login with Spotify
            </a>
        </div>
    );
}