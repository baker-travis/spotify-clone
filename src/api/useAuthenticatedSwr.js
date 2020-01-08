import useSwr from 'swr';
import { useAuth } from './auth';

export function useAuthenticatedSwr(key, fetchConfig, config) {
  const accessToken = useAuth();
  async function fetcher() {
    const resp = await fetch(key, {
      ...fetchConfig,
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
  return useSwr(key, fetcher, config);
}
