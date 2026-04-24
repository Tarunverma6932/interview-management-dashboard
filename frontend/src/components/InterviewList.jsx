import StatusBadge from './StatusBadge';

function InterviewList({ interviews }) {
  return (
    <div className="space-y-4">
      {interviews.map((item) => (
        <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-500">{item.round}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.date} with {item.interviewer}</h3>
            </div>
            <StatusBadge status={item.decision} />
          </div>
          <p className="mt-4 text-slate-600">{item.feedback}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
            <span>Score: {item.score}/10</span>
            <span>Decision: {item.decision}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InterviewList;
