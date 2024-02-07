// pages/api/search.js
export default async (req, res) => {
    const { query } = req.query;
  
    // 環境変数からクライアントIDとシークレットを取得
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
  
    // Basic認証用の文字列をエンコード
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
    // トークンを取得
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
  
    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;
  
    // Spotify APIを叩いて曲を検索
    const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    const searchData = await searchResponse.json();
    res.status(200).json(searchData);
  };
  