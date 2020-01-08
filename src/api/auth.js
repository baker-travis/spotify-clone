import { parseQueryString } from '../utils/query-parser';

const ACCESS_TOKEN_KEY = 'SPOTIFY_ACCESS_TOKEN';

function removeHash() {
  window.history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
}

export function useAuth() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) {
    return accessToken;
  }
  const query = window.location.hash ? window.location.hash.substring(1) : '';
  if (query) {
    removeHash();
    const { access_token } = parseQueryString(query);
    if (access_token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      return access_token;
    }
  }

  return null;
}

export function logOut() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
