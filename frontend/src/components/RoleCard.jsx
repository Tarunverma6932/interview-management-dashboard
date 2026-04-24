function RoleCard({ title, count, color, icon, subtitle }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{count}</p>
        </div>
        <div className={`rounded-3xl p-3 text-white ${color}`}>{icon}</div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export default RoleCard;
