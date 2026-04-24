import { getCurrentUser } from '../utils/auth';

function Profile() {
  const user = getCurrentUser();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Account profile</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{user?.name}</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Role</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">{user?.role}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">User experience</h3>
        <p className="mt-3 text-sm text-slate-600">This profile area is designed for HR, Team Lead, and CEO users to remain in sync with candidate progress and next-stage approvals. Use it to update your account or review role permissions.</p>
      </div>
    </div>
  );
}

export default Profile;
