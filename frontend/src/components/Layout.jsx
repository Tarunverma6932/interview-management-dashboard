import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { removeCurrentUser, getCurrentUser } from '../utils/auth';

function Layout() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    removeCurrentUser();
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar user={user} />
        <div className="flex-1 p-4 lg:p-6">
          <Topbar user={user} onLogout={handleLogout} />
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
