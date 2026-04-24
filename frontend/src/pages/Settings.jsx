function Settings() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">System settings</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Team configuration</h2>
        <p className="mt-4 text-slate-600">Manage notification preferences, candidate privacy controls, and scheduling defaults for your hiring team.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Scheduling</h3>
          <p className="mt-3 text-sm text-slate-600">Set default interview windows, buffer time, and calendar sync options for your recruiters.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Notifications</h3>
          <p className="mt-3 text-sm text-slate-600">Enable email alerts for candidate updates, interview reminders, and approval requests.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
