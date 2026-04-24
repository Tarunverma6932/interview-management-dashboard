import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import CandidateDetail from './pages/CandidateDetail';
import CandidateFormPage from './pages/CandidateFormPage';
import Interviews from './pages/Interviews';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { getCurrentUser } from './utils/auth';
import Layout from './components/Layout';

function ProtectedRoute({ children }) {
  const user = getCurrentUser();
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

function AuthRedirect() {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/signin" replace />;
  return <Navigate to="/dashboard" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthRedirect />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="candidates/new" element={<CandidateFormPage />} />
        <Route path="candidates/:id" element={<CandidateDetail />} />
        <Route path="candidates/:id/edit" element={<CandidateFormPage />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
