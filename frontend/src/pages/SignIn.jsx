import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from '../services/authService';

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await signIn(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-100 to-slate-50 px-4 py-12 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[40px] bg-white p-8 shadow-2xl sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-brand-light p-8 text-brand-dark">
            <p className="text-xs uppercase tracking-[0.3em]">Recruiting Platform</p>
            <h1 className="mt-6 text-3xl font-semibold">Recruiter Interview Dashboard</h1>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Secure access for HR, Team Lead, and CEO users. Track candidates, interviews, and hiring progress with a modern dashboard.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">Sign in</h2>
            <p className="mt-2 text-sm text-slate-500">Use your work email and password to continue.</p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-light"
                  placeholder="Enter your password"
                />
              </div>
              {error && <div className="rounded-3xl bg-red-50 p-4 text-sm text-red-700">{error}</div>}
              <button className="w-full rounded-3xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Sign in
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-500">
              New to the platform?{' '}
              <Link to="/signup" className="font-semibold text-brand-dark hover:text-blue-700">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
