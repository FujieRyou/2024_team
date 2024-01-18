import React, { useEffect, useState } from 'react';

function PlayMusic({trackUri,token}){
    const [player, setPlayer] = useState(null);
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true
        script.onload = () =>{
            const newPlayer = new Spotify.Player({
                name: 'My Spotify Player',
                getOAuthToken: (cd) =>{
                    cb(token);
                }
            })
        }
    })
}