import React, { useState } from 'react';
import { MOCK_TASKS } from '../../utils/mockData';
import type { Task } from '../../utils/mockData';
import { Target, Award, Search, ChevronRight } from 'lucide-react';

const Tasks: React.FC = () => {
  const [filter, setFilter] = useState<'Tümü' | 'Dijital' | 'Saha' | 'Eğitim'>('Tümü');
  
  const filteredTasks = filter === 'Tümü' 
    ? MOCK_TASKS 
    : MOCK_TASKS.filter((task: Task) => task.category === filter);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-black text-saadet-black">Görevler</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Görev ara..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-saadet-red outline-none transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['Tümü', 'Dijital', 'Saha', 'Eğitim'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-saadet-red text-white shadow-lg shadow-red-200' : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="grid gap-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="saadet-card !p-0 overflow-hidden relative group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${task.status === 'KANITLI' ? 'bg-red-50 text-saadet-red' : 'bg-slate-50 text-slate-600'}`}>
                  {task.status === 'KANITLI' ? <Award size={28} /> : <Target size={28} />}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <p className="text-2xl font-black text-saadet-black">+{task.points}</p>
                    <p className="text-xs font-black text-slate-400 uppercase">PT</p>
                  </div>
                  {task.status === 'KANITLI' && (
                    <span className="text-[10px] font-black bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded uppercase tracking-tighter">
                      +{task.bonusPoints} Bonus Mevcut
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-saadet-black mb-2 group-hover:text-saadet-red transition-colors">{task.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                {task.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest">
                    {task.category}
                  </span>
                  <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest">
                    LVL {task.minLevel}
                  </span>
                </div>
                
                <button className="saadet-button !px-6 !py-3 !text-sm">
                  Görevi Yap <ChevronRight size={18} />
                </button>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className={`h-1.5 w-full ${task.status === 'KANITLI' ? 'bg-saadet-red' : 'bg-slate-300'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
