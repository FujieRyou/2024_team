import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const spotifyClientId = '0a3e36eee74549849ad025c8cf1c4a2e'
const spotifyClientSecret = 'ae260ea0439b41f4869d0b4759694580'

export default NextAuth({
    providers: [
        Providers.Spotify({
        clientId: process.env.spotifyClientId,
        clientSecret: process.env.spotifyClientSecret,
        scope: "user-read-playback-state user-modify-playback-state",
        }),
    ],
})