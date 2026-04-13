import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Package, 
  PlusCircle, 
  LogOut,
  Settings
} from 'lucide-react';
import { useClerk } from '@clerk/react';

const AdminLayout: React.FC = () => {
  const { signOut } = useClerk();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-saadet-dark text-white flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-black text-saadet-red">ADIM ADIM</h1>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Panel Yönetimi</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavLink 
            to="/admin" 
            end
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-saadet-red text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/admin/tasks" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-saadet-red text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            <PlusCircle size={20} />
            <span className="font-medium">Görev Yönetimi</span>
          </NavLink>
          <NavLink 
            to="/admin/evidence" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-saadet-red text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            <CheckSquare size={20} />
            <span className="font-medium">Kanıt Onaylama</span>
          </NavLink>
          <NavLink 
            to="/admin/orders" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-saadet-red text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            <Package size={20} />
            <span className="font-medium">Siparişler</span>
          </NavLink>
          <NavLink 
            to="/admin/settings" 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-saadet-red text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            <Settings size={20} />
            <span className="font-medium">Ayarlar</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => signOut({ redirectUrl: '/' })}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-red-900/20 transition-colors w-full"
          >
            <LogOut size={20} />
            <span className="font-medium">Çıkış Yap</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-xl font-bold text-slate-800 m-0">Yönetici Paneli</h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">Admin Kullanıcı</p>
              <p className="text-xs text-slate-500">Süper Yetkili</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-saadet-red flex items-center justify-center text-white font-bold">
              AK
            </div>
          </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
