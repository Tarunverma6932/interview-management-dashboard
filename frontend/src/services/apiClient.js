import { getToken } from '../utils/auth';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(path, options = {}) {
  const token = getToken();
  const config = {
    method: options.method || 'GET',
    headers: {
      Accept: 'application/json',
      ...options.headers
    }
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (options.body) {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${BASE_URL}${path}`, config);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || response.statusText || 'API request failed');
  }
  return data;
}

export default { request };
