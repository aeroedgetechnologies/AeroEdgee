/** API base URL — works in dev and production builds (Netlify, custom domain). */
export function getApiBaseUrl() {
  const url =
    process.env.REACT_APP_API_URL ||
    process.env.REACT_APP_Local_API_URL ||
    'https://aeroedgee.onrender.com';
  return url.replace(/\/$/, '');
}
