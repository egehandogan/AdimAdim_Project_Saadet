import React, { useState } from 'react';
import { 
  Users, 
  CheckSquare, 
  TrendingUp, 
  AlertCircle,
  Package,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import ReportModal from '../../components/admin/ReportModal';

const AdminDashboard: React.FC = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const stats = [
    { label: 'Toplam Gönüllü', value: '12,482', change: '+12%', trend: 'up', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Bekleyen Kanıt', value: '84', change: '-5%', trend: 'down', icon: CheckSquare, color: 'text-saadet-red', bg: 'bg-red-50' },
    { label: 'Aktif Görevler', value: '312', change: '+2', trend: 'up', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Yeni Siparişler', value: '15', change: '+4', trend: 'up', icon: Package, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Genel Bakış</h2>
          <p className="text-slate-500">Platform performansını ve bekleyen işlemleri takip edin.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Rapor İndir
          </button>
          <button className="bg-saadet-red text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-red-200">
            Yeni Görev Ekle
          </button>
        </div>
      </div>

      {/* Report Modal */}
      <ReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        stats={stats}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-bold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800">{stat.value}</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Son Tamamlanan Görevler</h3>
            <button className="text-saadet-red text-sm font-bold">Tümünü Gör</button>
          </div>
          <div className="divide-y divide-slate-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                    EK
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Egehan Doğan</h4>
                    <p className="text-xs text-slate-400">Mahalle Broşür Dağıtımı • 2 dakika önce</p>
                  </div>
                </div>
                <div className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-1 rounded-full uppercase">
                  TAMAMLANDI
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts / Tasks */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <AlertCircle size={20} className="text-saadet-red" />
            Dikkat Gerekenler
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3 text-saadet-red mb-2">
                <Clock size={16} />
                <span className="text-xs font-black uppercase">Onay Bekliyor</span>
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">84 Yeni Kanıt Yüklendi</p>
              <p className="text-xs text-slate-500">İnceleme sırasına alınmayı bekliyor.</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-3 text-orange-600 mb-2">
                <Package size={16} />
                <span className="text-xs font-black uppercase">Kargo Bekliyor</span>
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">15 Yeni Market Siparişi</p>
              <p className="text-xs text-slate-500">Hazırlanıp kargoya verilmesi gerekiyor.</p>
            </div>
          </div>

          <button className="w-full saadet-button !py-4">
            Tüm İşlemlere Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
