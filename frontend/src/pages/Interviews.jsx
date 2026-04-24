import { useEffect, useState } from 'react';
import { scheduleInterview, getInterviews } from '../services/interviewService';
import { getCandidates } from '../services/candidateService';

function Interviews() {
  const [interviews, setInterviews] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({ candidate: '', round: 'Technical Interview', date: '', interviewer: '', feedback: '', score: 8, decision: 'shortlisted' });

  useEffect(() => {
    getInterviews().then(setInterviews);
    getCandidates().then(setCandidates);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await scheduleInterview(form);
    setForm({ candidate: '', round: 'Technical Interview', date: '', interviewer: '', feedback: '', score: 8, decision: 'shortlisted' });
    getInterviews().then(setInterviews);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interview planning</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Schedule and track rounds</h2>
          </div>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-1">
          <h3 className="text-lg font-semibold text-slate-900">New interview</h3>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm text-slate-700">
              Candidate
              <select
                required
                name="candidate"
                value={form.candidate}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
              >
                <option value="">Select candidate</option>
                {candidates.map((candidate) => (
                  <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-700">
              Interview date
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
              />
            </label>
            <label className="block text-sm text-slate-700">
              Interviewer
              <input
                name="interviewer"
                value={form.interviewer}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
                placeholder="Adrian Cox"
              />
            </label>
            <label className="block text-sm text-slate-700">
              Decision
              <select
                name="decision"
                value={form.decision}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
              >
                <option>shortlisted</option>
                <option>in progress</option>
                <option>cleared</option>
                <option>rejected</option>
                <option>hold</option>
                <option>next round scheduled</option>
              </select>
            </label>
            <button className="w-full rounded-3xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Schedule interview
            </button>
          </form>
        </div>
        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Upcoming interviews</h3>
            <div className="mt-5 space-y-4">
              {interviews.length ? (
                interviews.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">{item.round}</p>
                        <p className="text-sm text-slate-600">{item.date} • {item.interviewer}</p>
                      </div>
                      <p className="text-sm text-slate-700">Decision: {item.decision}</p>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{item.feedback}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No interviews scheduled yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interviews;
