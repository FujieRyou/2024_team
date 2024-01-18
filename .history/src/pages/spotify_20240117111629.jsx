export const  authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "0a3e36eee74549849ad025c8cf1c4a2e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "app-remote-control",
    "streaming",
    "playlist-read-collaborative",
];

export const getCurrentUserId = async (token) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('User profile request failed');
        }
        const data = await response.json();
        return data.id; // ユーザーIDを返す
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item)=>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`

export const getPlaylists = async (token) => {
    const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
    });
    return response.json();
};

export const createCollaboPlaylist = async(token, userId, name) =>{
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name: name,
            pulic: false,
            collaborative: true
        })
    });
    return response.json();
}

export const searchTracks = async (token, query) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const data = await response.json();
        return data.tracks.items; // 曲のリストを返す
    } else {
        throw new Error('Failed to fetch tracks');
    }
    } catch (error) {
        console.error('Error searching tracks:', error);
        throw error;
    }
};