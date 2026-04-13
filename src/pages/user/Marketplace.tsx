import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../../utils/mockData';
import { Star, AlertCircle, CheckCircle2, ShoppingCart } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [userPoints] = useState(1250);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  const handleBuy = (productName: string, price: number) => {
    if (userPoints >= price) {
      setPurchaseSuccess(productName);
      setTimeout(() => setPurchaseSuccess(null), 3000);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Marketplace Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-saadet-black">Ödül Marketi</h2>
        <div className="bg-saadet-red text-white font-black px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg shadow-red-200">
          <Star size={18} />
          <span>1,250 PT</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-saadet-dark rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-xs">
          <h3 className="text-2xl font-black mb-2">Puanlarını Harca, Hatıranı Seç!</h3>
          <p className="text-sm text-slate-400 mb-6">Özel tasarım ürünler ve sınırlı sayıda koleksiyon parçaları seni bekliyor.</p>
          <button className="saadet-button !bg-white !text-saadet-dark !px-6 !py-2 !text-sm">
            Katalogu İndir
          </button>
        </div>
        <ShoppingCart className="absolute -right-8 -bottom-8 text-white/10 w-48 h-48 -rotate-12" />
      </div>

      {/* Success Notification */}
      {purchaseSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 text-green-700 animate-in zoom-in duration-300">
          <CheckCircle2 size={24} />
          <div>
            <p className="font-bold">Sipariş Alındı!</p>
            <p className="text-sm">{purchaseSuccess} başarıyla sipariş edildi.</p>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="saadet-card !p-0 overflow-hidden flex flex-col sm:flex-row shadow-xl">
            <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-black text-saadet-black">{product.name}</h4>
                <div className="text-right">
                  <p className="text-2xl font-black text-saadet-red">{product.price.toLocaleString()}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Puan</p>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm mb-6 flex-1">
                Yüksek kaliteli malzemeden üretilen, Saadet Partisi kurumsal kimliğine uygun özel tasarım ürün.
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                  <AlertCircle size={14} />
                  <span>Stok: {product.stock} adet</span>
                </div>
                
                <button 
                  disabled={userPoints < product.price}
                  onClick={() => handleBuy(product.name, product.price)}
                  className={`saadet-button !px-8 !py-3 !rounded-2xl ${userPoints < product.price ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                >
                  {userPoints < product.price ? 'Yetersiz Puan' : 'Hemen Al'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-slate-100 rounded-2xl p-6 text-center">
        <p className="text-sm text-slate-500 italic">
          * Ürünler 5-7 iş günü içerisinde Genel Merkezden adresinize kargolanır.
        </p>
      </div>
    </div>
  );
};

export default Marketplace;
