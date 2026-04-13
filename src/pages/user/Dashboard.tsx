import React from 'react';
import { useUser } from '@clerk/react';
import { Target, Award, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  // Mock data for demo
  const stats = [
    { label: 'Toplam Puan', value: '1,250', icon: Award, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Seviye', value: '4', icon: TrendingUp, color: 'text-saadet-red', bg: 'bg-red-50' },
    { label: 'Tamamlanan', value: '12', icon: Target, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Davet', value: '3', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const recentTasks = [
    { id: 1, title: 'Sosyal Medya Paylaşımı', points: 50, category: 'Dijital', status: 'DİREKT' },
    { id: 2, title: 'Mahalle Broşür Dağıtımı', points: 150, category: 'Saha', status: 'KANITLI', bonus: '2X' },
    { id: 3, title: 'Üye Kaydı Formu', points: 200, category: 'Organizasyon', status: 'KANITLI' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Card */}
      <section className="bg-saadet-dark rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-slate-400 font-bold mb-1">Hoş geldin,</p>
          <h2 className="text-3xl font-black mb-6">{user?.fullName || 'Gönüllü'}</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-1">Mevcut Puan</p>
              <p className="text-2xl font-black text-saadet-red">1,250 <span className="text-sm font-bold opacity-60">PT</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-1">Hedefe Kalan</p>
              <p className="text-2xl font-black">250 <span className="text-sm font-bold opacity-60">PT</span></p>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-saadet-red rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="saadet-card flex flex-col items-center justify-center p-4 !gap-2">
            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-2xl font-black text-saadet-black">{stat.value}</p>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Task Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black text-saadet-black">Bugünkü Görevler</h3>
        <Link to="/tasks" className="text-saadet-red font-bold flex items-center gap-1 text-sm">
          Tümünü Gör <ChevronRight size={16} />
        </Link>
      </div>

      {/* Recent Tasks */}
      <div className="space-y-4">
        {recentTasks.map((task) => (
          <Link 
            key={task.id} 
            to={`/tasks/${task.id}`}
            className="saadet-card flex items-center justify-between p-4 group hover:border-saadet-red transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${task.status === 'DİREKT' ? 'bg-slate-100 text-slate-600' : 'bg-saadet-red/10 text-saadet-red'}`}>
                {task.status === 'DİREKT' ? <Target size={24} /> : <Award size={24} />}
              </div>
              <div>
                <h4 className="font-bold text-saadet-black group-hover:text-saadet-red transition-colors">{task.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-black bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase tracking-tighter">{task.category}</span>
                  {task.bonus && <span className="text-[10px] font-black bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded uppercase tracking-tighter">{task.bonus} Bonus</span>}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-saadet-black">+{task.points}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Puan</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Referral Banner */}
      <section className="bg-white border-2 border-dashed border-red-100 rounded-2xl p-6 flex items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-saadet-black mb-1">Yeni Üye Davet Et</h4>
          <p className="text-xs text-slate-500">Arkadaşlarını davet et, onların tamamladığı her görevden %3 bonus kazan!</p>
        </div>
        <Link to="/referrals" className="saadet-button !px-4 !py-3 whitespace-nowrap">
          Davet Et
        </Link>
      </section>
    </div>
  );
};

export default Dashboard;
