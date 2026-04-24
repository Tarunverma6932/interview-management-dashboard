import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/candidates', label: 'Candidates' },
  { path: '/interviews', label: 'Interviews' },
  { path: '/profile', label: 'Profile' },
  { path: '/reports', label: 'Reports' },
  { path: '/settings', label: 'Settings' }
];

function Sidebar({ user }) {
  return (
    <aside className="hidden w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white px-4 py-6 shadow-sm lg:block">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-12 w-12 rounded-2xl bg-brand-light text-brand-dark grid place-items-center text-xl font-semibold">IM</div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Hiring Suite</p>
          <h1 className="text-xl font-semibold text-slate-900">Interview Tracker</h1>
        </div>
      </div>
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive ? 'bg-brand-light text-brand-dark' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <p className="font-semibold text-slate-900">Support HR workflows</p>
        <p className="mt-2">Track candidate progress, interview rounds, and approvals from one clean dashboard.</p>
      </div>
      <div className="mt-8 rounded-3xl bg-brand-light p-4 text-sm text-brand-dark">
        <p className="font-semibold">Role</p>
        <p className="mt-1">{user?.role || 'Guest'}</p>
      </div>
    </aside>
  );
}

export default Sidebar;
