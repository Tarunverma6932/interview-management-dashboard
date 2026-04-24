import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCandidate } from '../services/candidateService';
import { getInterviewsForCandidate } from '../services/interviewService';
import InterviewList from '../components/InterviewList';
import StatusBadge from '../components/StatusBadge';

function CandidateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    getCandidate(id).then(setCandidate);
    getInterviewsForCandidate(id).then(setInterviews);
  }, [id]);

  if (!candidate) {
    return <div className="rounded-3xl bg-white p-8 shadow-sm">Loading candidate...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Candidate details</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{candidate.name}</h2>
          </div>
          <button
            onClick={() => navigate(`/candidates/${id}/edit`)}
            className="rounded-3xl bg-brand-light px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-50"
          >
            Edit profile
          </button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-slate-500">Contact</p>
            <p className="text-lg font-semibold text-slate-900">{candidate.email}</p>
            <p className="text-lg font-semibold text-slate-900">{candidate.phone}</p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Portfolio: <a className="text-brand-dark hover:underline" href={candidate.portfolio}>{candidate.portfolio}</a></p>
              <p>GitHub: <a className="text-brand-dark hover:underline" href={candidate.github}>{candidate.github}</a></p>
              <p>LinkedIn: <a className="text-brand-dark hover:underline" href={candidate.linkedin}>{candidate.linkedin}</a></p>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-slate-500">Application summary</p>
              <StatusBadge status={candidate.status} />
            </div>
            <p className="text-lg font-semibold text-slate-900">{candidate.appliedRole}</p>
            <p className="text-slate-600">Round: {candidate.currentRound}</p>
            <p className="text-slate-600">Expected join: {candidate.expectedJoining || 'Not set'}</p>
            <p className="text-slate-600">Next interview: {candidate.nextInterview || 'TBD'}</p>
          </div>
        </div>
        <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Notes</h3>
          <p className="mt-3 text-slate-600">{candidate.notes || 'No recruiter notes yet.'}</p>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900">Interview history</h3>
        <div className="mt-4">
          <InterviewList interviews={interviews} />
        </div>
      </div>
    </div>
  );
}

export default CandidateDetail;
