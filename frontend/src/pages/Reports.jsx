function Reports() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Analytics and insights</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Hiring pipeline reports</h2>
        <p className="mt-4 text-slate-600">Get a clean snapshot of hiring performance, interview throughput, and offer conversion. These summary panels help executives track pipeline health.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Offer rate</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">76%</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interview success</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">84%</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Time to hire</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">18 days</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
