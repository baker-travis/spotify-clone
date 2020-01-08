import { GET_PROFILE_URL } from './urls';

export async function getProfile(accessToken) {
  const resp = await fetch(GET_PROFILE_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!resp.ok) {
    throw new Error('request had an error');
  }
  const data = await resp.json();
  return data;
}
