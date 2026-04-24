import { useEffect, useState } from 'react';
import { getDashboardSummary } from '../services/dashboardService';
import { getCurrentUser } from '../utils/auth';
import CardStat from '../components/CardStat';
import RoleCard from '../components/RoleCard';

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const user = getCurrentUser();

  useEffect(() => {
    getDashboardSummary().then(setSummary);
  }, []);

  if (!summary) {
    return <div className="rounded-3xl bg-white p-8 shadow-sm">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-4">
        <CardStat label="Total candidates" value={summary.totalCandidates} trend="Hiring pace remains steady" icon="👥" />
        <CardStat label="Active interviews" value={summary.interviewCount} trend="New rounds added" icon="📅" />
        <CardStat label="Pending actions" value={summary.nextQueue.length} trend="Needs scheduling" icon="⏳" />
        <CardStat label="Final approvals" value={summary.status.cleared || 0} trend="Already cleared" icon="✅" />
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <RoleCard title="Frontend" count={summary.byRole.frontend} subtitle="UI and styling roles" color="bg-sky-500" icon="💻" />
        <RoleCard title="Backend" count={summary.byRole.backend} subtitle="API and server roles" color="bg-cyan-500" icon="🧠" />
        <RoleCard title="Full Stack" count={summary.byRole.fullstack} subtitle="End-to-end delivery" color="bg-blue-700" icon="🌐" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Interview status</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            {Object.entries(summary.status).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                <span className="capitalize">{status}</span>
                <span className="font-semibold text-slate-900">{count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Next interview queue</h3>
              <p className="mt-1 text-sm text-slate-500">Prioritize the candidates who need follow-up.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {summary.nextQueue.length ? (
              summary.nextQueue.map((candidate) => (
                <div key={candidate.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{candidate.name}</p>
                      <p className="text-sm text-slate-600">{candidate.appliedRole}</p>
                    </div>
                    <p className="text-sm text-slate-700">Next: {candidate.nextInterview || 'TBD'}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No interviews scheduled yet.</p>
            )}
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Role focus</h3>
        <p className="mt-3 text-sm text-slate-600">Your current view is optimized for {user?.role} access. HR sees end-to-end candidate health, Team sees technical pipeline, and CEO sees high-level hiring success.</p>
      </div>
    </div>
  );
}

export default Dashboard;
