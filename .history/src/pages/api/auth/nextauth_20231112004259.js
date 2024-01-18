import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.Spotify({
        clientId: process.env.spotifyClientId,
        clientSecret: process.env.spotifyClientSecret,
        scope: "user-read-playback-state user-modify-playback-state",
        }),
    ],
})