import {accessUrl} from "./spotify"

export default function Login() {
    return (
        <div>
            <h2>Music Dig app<br/>with Spotify API.</h2>
            <a className='signBtn' href={accessUrl}>
            Login with Spotify
            </a>
        </div>
    );
}
