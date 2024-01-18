// export default async function handler(req,res){
//     const code = "AQAiH0730PzhHZYIVmapIb_UNTTJWby9KeZn6dODK4F05m9wC3W9Nff7G8MmRXwR_lYVUcFwWvwv3t5vjOV7AXCbkN3hnwjr1T6gdJDp-czueMsyJBPT33VZ7X-COI-IbSsOWvIYelvPLsvbojfJTlv_149Ao2k437QSiCyrcQG37PG03cgmTAVpphBevO9CVVmc4lep";
//     const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
//     const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
//     const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

//     try{
//         const response = await axios.post(
//         new URLSearchParams({
//             code,
//             redirect_uri: REDIRECT_URI,
//             grant_type: 'client_credentials',
//         }),
//         {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
//         },
//         }
//     );
//     const { access_token, refresh_token } = response.data;
//     res.redirect('/dashboard');
//     }catch(error){
//         res.redirect('/login');
//     }
// }

