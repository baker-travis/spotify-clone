export const BASE_URL = 'https://api.spotify.com/v1';

export const GET_PROFILE_URL = `${BASE_URL}/me`;

const SCOPES = ['user-read-private', 'user-read-email'].join(' ');
const CLIENT_ID = '29aa5881d2a8438bac07bb317fdfe4d7';
export const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?redirect_uri=${encodeURIComponent(
  window.location
)}&response_type=token&scope=${encodeURIComponent(
  SCOPES
)}&client_id=${CLIENT_ID}`;
