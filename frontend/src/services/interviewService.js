import api from './apiClient';
import { interviews as defaultInterviews } from '../utils/mockData';

const STORAGE_KEY = 'im-interviews';

function getStoredInterviews() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultInterviews;
  } catch {
    return defaultInterviews;
  }
}

function saveInterviews(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function normalizeInterview(interview) {
  return {
    ...interview,
    id: interview._id || interview.id,
    candidate: interview.candidate?._id || interview.candidate || null
  };
}

function isNetworkError(error) {
  return error instanceof TypeError || error.message.toLowerCase().includes('failed to fetch');
}

export async function getInterviews() {
  try {
    const response = await api.request('/interviews');
    return response.map(normalizeInterview);
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    return getStoredInterviews();
  }
}

export async function getInterviewsForCandidate(candidateId) {
  try {
    const response = await api.request(`/interviews/candidate/${candidateId}`);
    return response.map(normalizeInterview);
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredInterviews();
    return items.filter((item) => item.candidate === candidateId);
  }
}

export async function scheduleInterview(interview) {
  try {
    const response = await api.request('/interviews', { method: 'POST', body: interview });
    const normalized = normalizeInterview(response);
    const items = getStoredInterviews();
    saveInterviews([normalized, ...items]);
    return normalized;
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredInterviews();
    const newInterview = { id: `i${Date.now()}`, ...interview };
    saveInterviews([newInterview, ...items]);
    return newInterview;
  }
}

export async function updateInterview(id, update) {
  try {
    const response = await api.request(`/interviews/${id}`, { method: 'PUT', body: update });
    const normalized = normalizeInterview(response);
    const items = getStoredInterviews().map((item) => (item.id === id ? normalized : item));
    saveInterviews(items);
    return normalized;
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const items = getStoredInterviews();
    const updated = items.map((item) => (item.id === id ? { ...item, ...update } : item));
    saveInterviews(updated);
    return updated.find((item) => item.id === id) || null;
  }
}
