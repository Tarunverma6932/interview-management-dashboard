import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

function CandidateTable({ candidates }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="px-6 py-4 font-medium">Candidate</th>
            <th className="px-6 py-4 font-medium">Role</th>
            <th className="px-6 py-4 font-medium">Round</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Interview</th>
            <th className="px-6 py-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="hover:bg-slate-50">
              <td className="px-6 py-4">
                <div className="font-semibold text-slate-900">{candidate.name}</div>
                <div className="text-xs text-slate-500">{candidate.email}</div>
              </td>
              <td className="px-6 py-4 text-slate-700">{candidate.appliedRole}</td>
              <td className="px-6 py-4 text-slate-700">{candidate.currentRound}</td>
              <td className="px-6 py-4"><StatusBadge status={candidate.status} /></td>
              <td className="px-6 py-4 text-slate-700">{candidate.nextInterview || 'None'}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/candidates/${candidate.id}`}
                  className="rounded-2xl bg-brand-light px-4 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-50"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateTable;
