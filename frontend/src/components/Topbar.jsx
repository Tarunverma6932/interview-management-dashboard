function Topbar({ user, onLogout }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Welcome back</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">{user?.role} Dashboard</h2>
        <p className="text-sm text-slate-600">Monitor interviews, candidates, and hiring momentum.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-3xl bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">{user?.name}</div>
        <button
          onClick={onLogout}
          className="rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;
