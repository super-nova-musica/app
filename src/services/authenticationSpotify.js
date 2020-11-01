import {authorize, refresh} from 'react-native-app-auth';

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: '5e5c7be3c0744fed87b706491ba15a91',
      clientSecret: '96182ab5e39942ffb33f8a4fa1cb4a9c',
      redirectUrl: 'com.supernova.music://ListGeneros',
      scopes: [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-library-read',
        'user-library-modify',
        'user-top-read',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log(JSON.stringify(error));
    } 
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }

}

const authHandler = new AuthenticationHandler();

export default authHandler;