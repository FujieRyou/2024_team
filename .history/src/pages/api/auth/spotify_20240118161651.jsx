import { env } from "next.config";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";

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

const headers = (token) => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
});

export const getCurrentUserId = async (token) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', { headers: headers(token) });
        if (!response.ok) {
            throw new Error('User profile request failed');
        }
        const data = await response.json();
        return data.id;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${process.env.CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(' ')}&response_type=token&show_dialog=true`;

export const getPlaylists = async (token) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/playlists`, { headers: headers(token) });
        if (!response.ok) {
            throw new Error('Failed to fetch playlists');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
};

export const createCollaboPlaylist = async (token, userId, name) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                public: false,
                collaborative: true
            })
        });
        if (!response.ok) {
            throw new Error('Failed to create playlist');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating playlist:', error);
        throw error;
    }
};

export const searchTracks = async (token, query) => {
    try {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedQuery}&type=track`, { 
            method: 'GET', 
            headers: headers(token) 
        });
        if (!response.ok) {
            throw new Error('Failed to fetch tracks');
        }
        return await response.json();
    } catch (error) {
        console.error('Error searching tracks:', error);
        throw error;
    }
};
