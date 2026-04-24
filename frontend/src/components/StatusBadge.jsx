const statusStyles = {
  shortlisted: 'bg-blue-100 text-blue-700',
  'in progress': 'bg-sky-100 text-sky-700',
  cleared: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-red-100 text-red-700',
  hold: 'bg-amber-100 text-amber-700',
  'next round scheduled': 'bg-violet-100 text-violet-700'
};

function StatusBadge({ status }) {
  const normalized = status?.toLowerCase() || 'pending';
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[normalized] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
