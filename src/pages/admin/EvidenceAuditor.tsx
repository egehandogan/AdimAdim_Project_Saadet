import React from 'react';
import { Check, X, Eye, User, Award } from 'lucide-react';

const EvidenceAuditor: React.FC = () => {
  const requests = [
    { id: '1', user: 'Egehan Doğan', task: 'Mahalle Broşür Dağıtımı', date: '12.04.2026', points: 300, image: 'https://placehold.co/100x100/E30613/white?text=Kanıt' },
    { id: '2', user: 'Ahmet Yılmaz', task: 'Üye Kaydı Formu', date: '11.04.2026', points: 1000, image: 'https://placehold.co/100x100/E30613/white?text=Kanıt' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-slate-800">Kanıt Onaylama</h2>
      
      <div className="grid gap-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-1">
              <img src={req.image} className="w-20 h-20 rounded-2xl object-cover bg-slate-100" alt="Proof" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User size={14} className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-900">{req.user}</span>
                  <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">{req.date}</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{req.task}</h4>
                <div className="flex items-center gap-1.5 text-saadet-red font-black text-sm">
                  <Award size={16} />
                  <span>{req.points} Puan (Baz + Bonus)</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-3 bg-red-50 text-saadet-red rounded-xl hover:bg-saadet-red hover:text-white transition-all shadow-sm">
                <X size={20} />
              </button>
              <button className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
                <Check size={20} />
              </button>
              <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-200 transition-all shadow-sm">
                <Eye size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceAuditor;
