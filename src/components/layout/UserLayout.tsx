import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, ShoppingBag, Users, User, Bell } from 'lucide-react';

const UserLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-saadet-gray pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-black text-saadet-red m-0">ADIM ADIM</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 relative text-saadet-black">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-saadet-red rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-lg mx-auto p-4">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 pb-6 glass-morphism z-50">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-saadet-red' : 'text-slate-400'}`}
          >
            <Home size={26} />
            <span className="text-xs font-bold">Ana Sayfa</span>
          </NavLink>
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-saadet-red' : 'text-slate-400'}`}
          >
            <Users size={26} />
            <span className="text-xs font-bold">Görevler</span>
          </NavLink>
          <NavLink 
            to="/marketplace" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-saadet-red' : 'text-slate-400'}`}
          >
            <ShoppingBag size={26} />
            <span className="text-xs font-bold">Market</span>
          </NavLink>
          <NavLink 
            to="/referrals" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-saadet-red' : 'text-slate-400'}`}
          >
            <Users size={26} />
            <span className="text-xs font-bold">Davet Et</span>
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-saadet-red' : 'text-slate-400'}`}
          >
            <User size={26} />
            <span className="text-xs font-bold">Profil</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default UserLayout;
