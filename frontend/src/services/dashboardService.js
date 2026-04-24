import api from './apiClient';
import { getCandidates } from './candidateService';
import { getInterviews } from './interviewService';

function isNetworkError(error) {
  return error instanceof TypeError || error.message.toLowerCase().includes('failed to fetch');
}

export async function getDashboardSummary() {
  try {
    return await api.request('/dashboard/summary');
  } catch (error) {
    if (!isNetworkError(error)) throw error;
    const candidates = await getCandidates();
    const interviews = await getInterviews();

    const counts = candidates.reduce(
      (acc, item) => {
        acc[item.appliedRole] = (acc[item.appliedRole] || 0) + 1;
        acc.status[item.status] = (acc.status[item.status] || 0) + 1;
        return acc;
      },
      { status: {} }
    );

    const pending = candidates.filter((item) => item.status === 'in progress' || item.status === 'shortlisted');
    return {
      totalCandidates: candidates.length,
      byRole: {
        frontend: counts['Frontend Developer'] || 0,
        backend: counts['Backend Developer'] || 0,
        fullstack: counts['Full Stack Developer'] || 0
      },
      status: counts.status,
      nextQueue: pending.slice(0, 4),
      interviewCount: interviews.length
    };
  }
}
