import Candidate from '../models/Candidate.js';
import Interview from '../models/Interview.js';

export async function getDashboardSummary(req, res) {
  const candidates = await Candidate.find();
  const interviews = await Interview.find();

  const statusCount = candidates.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const roleCount = candidates.reduce((acc, item) => {
    acc[item.appliedRole] = (acc[item.appliedRole] || 0) + 1;
    return acc;
  }, {});

  const nextQueue = candidates
    .filter((item) => ['in progress', 'shortlisted', 'next round scheduled'].includes(item.status))
    .slice(0, 4);

  res.json({
    totalCandidates: candidates.length,
    byRole: {
      frontend: roleCount['Frontend Developer'] || 0,
      backend: roleCount['Backend Developer'] || 0,
      fullstack: roleCount['Full Stack Developer'] || 0
    },
    status: statusCount,
    nextQueue,
    interviewCount: interviews.length
  });
}
