function CandidateForm({ candidate = {}, onChange, onSubmit, submitLabel }) {
  return (
    <form className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input
            required
            name="name"
            value={candidate.name || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="Jane Doe"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email address</span>
          <input
            required
            type="email"
            name="email"
            value={candidate.email || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="jane@example.com"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Phone number</span>
          <input
            required
            type="tel"
            name="phone"
            value={candidate.phone || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="(123) 456-7890"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Applied role</span>
          <select
            required
            name="appliedRole"
            value={candidate.appliedRole || 'Frontend Developer'}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">Portfolio link</span>
          <input
            name="portfolio"
            value={candidate.portfolio || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="https://portfolio.example.com"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">GitHub profile</span>
          <input
            name="github"
            value={candidate.github || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="https://github.com/username"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">LinkedIn profile</span>
          <input
            name="linkedin"
            value={candidate.linkedin || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="https://linkedin.com/in/username"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">Resume URL</span>
          <input
            name="resume"
            value={candidate.resume || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="https://storage.example.com/resume.pdf"
          />
        </label>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Current round</span>
          <input
            name="currentRound"
            value={candidate.currentRound || 'Round 1'}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
            placeholder="Round 2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Status</span>
          <select
            name="status"
            value={candidate.status || 'shortlisted'}
            onChange={onChange}
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
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Next interview</span>
          <input
            type="date"
            name="nextInterview"
            value={candidate.nextInterview || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Expected joining</span>
          <input
            type="date"
            name="expectedJoining"
            value={candidate.expectedJoining || ''}
            onChange={onChange}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Notes</span>
        <textarea
          name="notes"
          value={candidate.notes || ''}
          onChange={onChange}
          rows="4"
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
          placeholder="Add interview highlights, concerns, and next steps"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-3xl bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default CandidateForm;
