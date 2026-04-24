import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCandidates } from '../services/candidateService';
import CandidateTable from '../components/CandidateTable';

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then(setCandidates);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Candidate management</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">All candidates</h2>
        </div>
        <Link
          to="/candidates/new"
          className="rounded-3xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add candidate
        </Link>
      </div>
      <CandidateTable candidates={candidates} />
    </div>
  );
}

export default Candidates;
