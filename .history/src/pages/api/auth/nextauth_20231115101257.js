import NextAuth from "next-auth"
import spotifyProviders from "next-auth/providers/spotify"

export default NextAuth({
    providers: [
        spotifyProviders({
        clientId: process.env.spotifyClientId,
        clientSecret: process.env.spotifyClientSecret,
        authorization:loginUrl
        // scope: "user-read-playback-state user-modify-playback-state",
        }),
    ],
})