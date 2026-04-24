import api from './apiClient';
import { candidates as defaultCandidates } from '../utils/mockData';

const STORAGE_KEY = 'im-candidates';

function getStoredCandidates() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultCandidates;
  } catch {
    return defaultCandidates;
  }
}

function saveCandidates(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function normalizeCandidate(candidate) {
  return { ...candidate, id: candidate._id || candidate.id };
}

function isNetworkError(error) {
  return error instanceof TypeError || error.message.toLowerCase().includes('failed to fetch');
}

export async function getCandidates() {
  try {
    const response = await api.request('/candidates');
    return response.map(normalizeCandidate);
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    return getStoredCandidates();
  }
}

export async function getCandidate(id) {
  try {
    const response = await api.request(`/candidates/${id}`);
    return normalizeCandidate(response);
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredCandidates();
    return items.find((item) => item.id === id) || null;
  }
}

export async function createCandidate(candidate) {
  try {
    const response = await api.request('/candidates', { method: 'POST', body: candidate });
    const normalized = normalizeCandidate(response);
    const items = getStoredCandidates();
    saveCandidates([normalized, ...items]);
    return normalized;
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredCandidates();
    const newCandidate = { id: `c${Date.now()}`, ...candidate };
    saveCandidates([newCandidate, ...items]);
    return newCandidate;
  }
}

export async function updateCandidate(id, update) {
  try {
    const response = await api.request(`/candidates/${id}`, { method: 'PUT', body: update });
    const normalized = normalizeCandidate(response);
    const items = getStoredCandidates().map((item) => (item.id === id ? normalized : item));
    saveCandidates(items);
    return normalized;
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredCandidates();
    const updated = items.map((item) => (item.id === id ? { ...item, ...update } : item));
    saveCandidates(updated);
    return updated.find((item) => item.id === id) || null;
  }
}
