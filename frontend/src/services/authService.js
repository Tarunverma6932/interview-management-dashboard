import api from './apiClient';
import { users as defaultUsers } from '../utils/mockData';
import { setCurrentUser } from '../utils/auth';

const STORAGE_KEY = 'im-users';

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultUsers;
  } catch {
    return defaultUsers;
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function isNetworkError(error) {
  return error instanceof TypeError || error.message.toLowerCase().includes('failed to fetch');
}

export async function signIn(credentials) {
  try {
    const response = await api.request('/auth/signin', { method: 'POST', body: credentials });
    const payload = { id: response.id, name: response.name, email: response.email, role: response.role };
    setCurrentUser(payload, response.token);
    return payload;
  } catch (error) {
    if (!isNetworkError(error)) {
      throw error;
    }
    const users = getStoredUsers();
    const user = users.find((item) => item.email === credentials.email && item.password === credentials.password);
    if (!user) {
      throw new Error('Invalid email or password.');
    }
    const payload = { id: user.id, name: user.name, email: user.email, role: user.role };
    setCurrentUser(payload, '');
    return payload;
  }
}

export async function signUp(formData) {
  try {
    const response = await api.request('/auth/signup', { method: 'POST', body: formData });
    const payload = { id: response.id, name: response.name, email: response.email, role: response.role };
    setCurrentUser(payload, response.token);
    return payload;
  } catch (error) {
    if (!isNetworkError(error)) {
      throw error;
    }
    const users = getStoredUsers();
    const existing = users.find((item) => item.email === formData.email);
    if (existing) {
      throw new Error('A user already exists with that email.');
    }
    const newUser = {
      id: `u${Date.now()}`,
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.password
    };
    saveUsers([...users, newUser]);
    const payload = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
    setCurrentUser(payload, '');
    return payload;
  }
}
