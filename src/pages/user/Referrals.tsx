import React from 'react';
import { Share2, Users, Gift, Copy, CheckCircle2 } from 'lucide-react';

const Referrals: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-black text-saadet-black">Davet Et ve Kazan</h2>

      {/* Hero Card */}
      <div className="bg-gradient-to-br from-saadet-red to-red-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <p className="text-white/80 font-bold mb-2 uppercase tracking-widest text-xs">Referans Programı</p>
          <h3 className="text-4xl font-black mb-4">%3 Ek Puan Bonus!</h3>
          <p className="text-red-50 text-sm leading-relaxed mb-8 max-w-xs">
            Davet ettiğin her arkadaşının tamamladığı görevlerden sen de %3 bonus puan kazanırsın.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-xs text-red-100 font-bold mb-3 uppercase tracking-wider">Senin Davet Linkin</p>
            <div className="flex gap-2">
              <input 
                type="text" 
                readOnly 
                value="adimadim.com/ref/egehanD" 
                className="bg-white text-saadet-black px-4 py-3 rounded-xl flex-1 font-bold text-sm outline-none"
              />
              <button 
                onClick={handleCopy}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-xl transition-all"
              >
                {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        <Users className="absolute -right-12 -bottom-12 text-white/10 w-64 h-64 -rotate-12" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="saadet-card flex flex-col items-center justify-center p-6 bg-white border border-slate-100">
          <p className="text-3xl font-black text-saadet-red">12</p>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mt-1">Davet Sayısı</p>
        </div>
        <div className="saadet-card flex flex-col items-center justify-center p-6 bg-white border border-slate-100">
          <p className="text-3xl font-black text-saadet-black">450</p>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mt-1">Toplam Kazanç</p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        <h4 className="font-black text-saadet-black text-lg">Nasıl Çalışır?</h4>
        <div className="space-y-3">
          {[
            { icon: Share2, title: 'Linki Paylaş', desc: 'Davet linkini sosyal medyada veya WhatsApp\'ta paylaş.' },
            { icon: Users, title: 'Üye Olsunlar', desc: 'Arkadaşların linkinle platforma kayıt olsunlar.' },
            { icon: Gift, title: 'Puanları Topla', desc: 'Onlar görev yaptıkça senin puanın artsın.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-saadet-red flex-shrink-0">
                <step.icon size={24} />
              </div>
              <div>
                <h5 className="font-bold text-saadet-black">{step.title}</h5>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="saadet-button w-full flex items-center justify-center gap-3 py-5 text-xl">
        <Share2 size={24} /> Hemen Paylaş
      </button>
    </div>
  );
};

export default Referrals;
