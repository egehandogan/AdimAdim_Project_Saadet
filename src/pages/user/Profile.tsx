import React from 'react';
import { useUser, useClerk } from '@clerk/react';
import { User, Mail, MapPin, Phone, LogOut, ChevronRight, Settings, Shield } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const menuItems = [
    { icon: Settings, label: 'Hesap Ayarları', desc: 'Şifre, e-posta ve güvenlik' },
    { icon: MapPin, label: 'Adres Bilgilerim', desc: 'Hediye gönderim adresleri' },
    { icon: Shield, label: 'KVKK Aydınlatma Metni', desc: 'Veri gizliliği ve güvenlik' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center">
             {user?.imageUrl ? (
               <img src={user.imageUrl} alt="Profile" className="w-full h-full object-cover" />
             ) : (
               <User size={64} className="text-slate-300" />
             )}
          </div>
          <div className="absolute bottom-1 right-1 bg-saadet-red text-white p-2 rounded-full border-2 border-white shadow-lg">
            <Settings size={16} />
          </div>
        </div>
        
        <h2 className="text-2xl font-black text-saadet-black mb-1">{user?.fullName || 'Kullanıcı'}</h2>
        <div className="flex items-center gap-1.5 text-slate-500 text-sm font-bold">
          <MapPin size={16} /> İstanbul, Türkiye
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-4">
        <div className="saadet-card flex items-center gap-4 bg-white border border-slate-100">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
            <Mail size={24} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">E-Posta</p>
            <p className="font-bold text-saadet-black underline decoration-saadet-red/20">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>

        <div className="saadet-card flex items-center gap-4 bg-white border border-slate-100">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
            <Phone size={24} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Telefon</p>
            <p className="font-bold text-saadet-black">+90 5** *** ** **</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="space-y-3">
        {menuItems.map((item, idx) => (
          <button key={idx} className="w-full saadet-card flex items-center justify-between p-5 hover:bg-slate-50 transition-all border border-slate-100 group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-50 flex items-center justify-center text-slate-400 group-hover:text-saadet-red transition-colors">
                <item.icon size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-saadet-black">{item.label}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-300" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <button 
        onClick={() => signOut({ redirectUrl: '/' })}
        className="w-full flex items-center justify-center gap-3 py-5 text-red-600 font-black hover:bg-red-50 rounded-2xl transition-all"
      >
        <LogOut size={24} /> Hesaptan Çıkış Yap
      </button>

      {/* Version */}
      <div className="text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Adım Adım v1.2.4 (Beta)</p>
      </div>
    </div>
  );
};

export default Profile;
