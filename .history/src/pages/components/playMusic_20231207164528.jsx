import React, { useEffect, useState } from 'react';

function PlayMusic({ trackUri, token }){
    const [player, setPlayer] = useState(null);

    useEffect(()=>{
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;
        script.onload = () =>{
            const newPlayer = new Spotify.Player({
                name: 'My Spotify Player',
                getOAuthToken: (cd) =>{
                    cb(token);
                }
            });
            newPlayer.addListener("ready",({ device_id }) =>{
                console.log('Ready with Device ID', device_id);
                setPlayer(newPlayer);
            })
            newPlayer.connect();
        };
        document.body.appendChild(script);
        return() =>{
            f (player) {
                player.play({
                    uris: [trackUri], // 再生する曲のURIを指定
                }).then(() => {
                    console.log('Playback started');
                }).catch((error) => {
                    console.error('Error starting playback:', error);
                });
            }
        }
    })
}
