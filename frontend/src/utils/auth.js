const USER_STORAGE_KEY = 'im-auth-user';
const TOKEN_STORAGE_KEY = 'im-auth-token';

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || 'null');
  } catch (error) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setCurrentUser(user, token) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }
}

export function removeCurrentUser() {
  localStorage.removeItem(USER_STORAGE_KEY);
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export function hasRole(user, role) {
  return user?.role === role || user?.role === 'CEO';
}
