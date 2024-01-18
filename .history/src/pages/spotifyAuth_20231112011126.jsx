import { useEffect, useState } from "react";

function useSpotifySearch(quary){
    const [result,setResult] = useState(null);

    useEffect((quary)=>{
        if(!quary){
            return;
        }
        fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`,{
            headers:{
                Authorization: `Bearer ${session.accessToken}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            setResults(data.tracks.items);
        })
    })
}