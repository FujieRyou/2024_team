// import NextAuth from "next-auth"
// import spotifyProviders from "next-auth/providers/spotify"

// export default NextAuth({
//     providers: [
//         spotifyProviders({
//         clientId: process.env.spotifyClientId,
//         clientSecret: process.env.spotifyClientSecret,
//         authorization:loginUrl
//         scope: "user-read-playback-state user-modify-playback-state",
//         }),
//     ],
// })

const spotifyAuth = async(req,res) =>{
    const { code, state } = req.query;
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append("rediect_uri", process.env.RETURN_TO);

    const response = await axion.post<SpotifyAuthApiResponse>(
        'https://accounts.spotify.com/api/token',
        params,
        {
            headers:{
                "Content-Type": "",
                'Authorization': `Basic${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,"utf-8").toString('base64')}`
            }
        }
    )
}