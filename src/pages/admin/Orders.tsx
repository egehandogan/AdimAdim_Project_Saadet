import React from 'react';
import { MapPin } from 'lucide-react';

const Orders: React.FC = () => {
  const orders = [
    { id: '#12894', user: 'Ahmet Yılmaz', product: 'Özel Seri Parti Rozeti', address: 'Ankara, Çankaya', status: 'HAZIRLANIYOR', color: 'blue' },
    { id: '#12893', user: 'Ayşe Demir', product: 'İmza Koleksiyon Kanvas Çanta', address: 'İstanbul, Beşiktaş', status: 'KARGOYA VERİLDİ', color: 'orange' },
    { id: '#12892', user: 'Mehmet Öz', product: 'Vizyon Belgesi Prestij Kitabı', address: 'Bursa, Nilüfer', status: 'TESLİM EDİLDİ', color: 'green' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-slate-800">Sipariş Yönetimi</h2>
      
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">SİPARİŞ NO</th>
              <th className="px-6 py-4">KULLANICI / ÜRÜN</th>
              <th className="px-6 py-4">ADRES</th>
              <th className="px-6 py-4">DURUM</th>
              <th className="px-6 py-4 text-right">İŞLEMLER</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-black text-slate-400 text-sm">
                  {order.id}
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-800 text-sm">{order.user}</p>
                  <p className="text-xs text-slate-500">{order.product}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                    <MapPin size={12} /> {order.address}
                  </div>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${order.status === 'HAZIRLANIYOR' ? 'bg-blue-500' : order.status === 'KARGOYA VERİLDİ' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                       <span className="text-[10px] font-black uppercase text-slate-600">{order.status}</span>
                    </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-saadet-red text-sm font-bold hover:underline">
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
