import React from 'react';
import { SignInButton, useUser } from '@clerk/react';
import { ChevronRight, Target, Award, ShieldCheck } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    const isAdmin = user?.primaryEmailAddress?.emailAddress === 'admin@test.com';
    return <Navigate to={isAdmin ? "/admin" : "/dashboard"} replace />;
  }

  return (
    <div className="min-h-screen bg-saadet-gray selection:bg-saadet-red/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-saadet-dark py-24 sm:py-32">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-saadet-red to-[#ff0000] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <span className="bg-saadet-red text-white text-sm font-black px-3 py-1 rounded-full uppercase tracking-tighter">Yeni</span>
              <p className="text-saadet-red font-bold">Saadet Partisi Dijital Seferberlik</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Adım Adım <br />
              <span className="text-saadet-red">Geleceği İnşa Et</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
              Mikro görevleri tamamla, puanları topla, hem partine katkı sağla hem de özel ödüllerin sahibi ol. Harekete geçme zamanı!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <SignInButton mode="modal">
                <button className="saadet-button w-full sm:w-auto px-12 py-5 text-xl">
                  Harekete Geç <ChevronRight size={24} />
                </button>
              </SignInButton>
              <button className="saadet-button-outline w-full sm:w-auto px-12 py-5 text-xl border-white text-white hover:bg-white/10">
                Projeyi İncele
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-saadet-black mb-4">Nasıl Çalışır?</h2>
            <p className="text-lg text-slate-500">Çok basit! Üye ol, sana uygun görevleri seç ve tamamla.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="saadet-card flex flex-col items-center text-center p-12">
              <div className="w-16 h-16 bg-saadet-red/10 rounded-2xl flex items-center justify-center text-saadet-red mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Görevi Seç</h3>
              <p className="text-slate-500">Bölgene ve yeteneklerine uygun yüzlerce mikro görevden birini seç.</p>
            </div>

            <div className="saadet-card flex flex-col items-center text-center p-12">
              <div className="w-16 h-16 bg-saadet-red/10 rounded-2xl flex items-center justify-center text-saadet-red mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Harekete Geç</h3>
              <p className="text-slate-500">Görevi başarıyla tamamla ve istersen kanıtlarını yükle, 2X puan kazan.</p>
            </div>

            <div className="saadet-card flex flex-col items-center text-center p-12">
              <div className="w-16 h-16 bg-saadet-red/10 rounded-2xl flex items-center justify-center text-saadet-red mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ödülünü Al</h3>
              <p className="text-slate-500">Kazandığın puanlarla Market'ten dilediğin ürünü seç, kapına gelsin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Stats */}
      <div className="bg-saadet-gray py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-saadet-red mb-2">10K+</p>
              <p className="text-saadet-black font-bold uppercase tracking-wider text-sm">Aktif Gönüllü</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-saadet-red mb-2">50K+</p>
              <p className="text-saadet-black font-bold uppercase tracking-wider text-sm">Tamamlanan Görev</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-saadet-red mb-2">1M+</p>
              <p className="text-saadet-black font-bold uppercase tracking-wider text-sm">Dağıtılan Puan</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-saadet-red mb-2">81</p>
              <p className="text-saadet-black font-bold uppercase tracking-wider text-sm">İl Temsilciliği</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-saadet-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-saadet-red mb-4">ADIM ADIM</h2>
          <p className="text-slate-400 mb-8">© 2026 Saadet Partisi. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-6">
            <Link to="#" className="hover:text-saadet-red transition-colors">Kullanım Koşulları</Link>
            <Link to="#" className="hover:text-saadet-red transition-colors">Gizlilik Politikası</Link>
            <Link to="#" className="hover:text-saadet-red transition-colors">İletişim</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
