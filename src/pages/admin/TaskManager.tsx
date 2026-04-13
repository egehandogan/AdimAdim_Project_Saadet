import React from 'react';
import { MOCK_TASKS } from '../../utils/mockData';
import { Plus, Search, MoreVertical, Edit2, Trash2, MapPin } from 'lucide-react';

const TaskManager: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-slate-800">Görev Yönetimi</h2>
        <button className="saadet-button flex items-center gap-2">
          <Plus size={20} /> Yeni Görev Ekle
        </button>
      </div>

      {/* Stats Mini Bar */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
          <span className="text-sm font-bold text-slate-400 uppercase">Aktif</span>
          <span className="text-xl font-black text-green-600">24</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
          <span className="text-sm font-bold text-slate-400 uppercase">Taslak</span>
          <span className="text-xl font-black text-orange-600">8</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
          <span className="text-sm font-bold text-slate-400 uppercase">Toplam Puan</span>
          <span className="text-xl font-black text-saadet-red">8,500</span>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 relative">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Görevlerde ara..." 
            className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-saadet-red outline-none text-sm transition-all"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">GÖREV ADI</th>
                <th className="px-6 py-4">KATEGORİ</th>
                <th className="px-6 py-4">PUAN (BAZ)</th>
                <th className="px-6 py-4">DURUM</th>
                <th className="px-6 py-4 text-right">İŞLEMLER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_TASKS.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${task.status === 'KANITLI' ? 'bg-red-50 text-saadet-red' : 'bg-slate-100 text-slate-500'}`}>
                        {task.status === 'KANITLI' ? 'K' : 'D'}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{task.title}</p>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                          <MapPin size={10} /> {task.regionLock || 'Türkiye Geneli'}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-2 py-1 rounded text-center uppercase">
                      {task.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-black text-slate-800">{task.points}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                       <span className="text-xs font-bold text-slate-600">Aktif</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-blue-600 transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-saadet-red transition-all">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
