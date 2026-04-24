function CardStat({ label, value, trend, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="rounded-3xl bg-brand-light p-3 text-brand-dark">{icon}</div>
      </div>
      {trend ? <p className="mt-4 text-sm text-slate-500">{trend}</p> : null}
    </div>
  );
}

export default CardStat;
