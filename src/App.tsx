import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/react';
import UserLayout from './components/layout/UserLayout';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/user/Dashboard';
import Tasks from './pages/user/Tasks';
import Marketplace from './pages/user/Marketplace';
import Referrals from './pages/user/Referrals';
import Profile from './pages/user/Profile';

import AdminDashboard from './pages/admin/AdminDashboard';
import TaskManager from './pages/admin/TaskManager';
import EvidenceAuditor from './pages/admin/EvidenceAuditor';
import Orders from './pages/admin/Orders';

function App() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-saadet-gray">
        <div className="w-12 h-12 border-4 border-saadet-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Simple demo role check
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'admin@test.com';

  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* User Protected Routes */}
      {isSignedIn && !isAdmin && (
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      )}

      {/* Admin Protected Routes */}
      {isSignedIn && isAdmin && (
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/tasks" element={<TaskManager />} />
          <Route path="/admin/evidence" element={<EvidenceAuditor />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      )}

      {/* Fallback for unauthenticated or unauthorized access */}
      {!isSignedIn && <Route path="*" element={<Navigate to="/" replace />} />}
      {isSignedIn && (
        <Route 
          path="*" 
          element={<Navigate to={isAdmin ? "/admin" : "/dashboard"} replace />} 
        />
      )}
    </Routes>
  );
}

export default App;
