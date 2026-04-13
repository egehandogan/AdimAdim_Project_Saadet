import React from 'react';
import { X, FileText, FileSpreadsheet, Download, AlertCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

interface Stat {
  label: string;
  value: string;
  change: string;
}

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: Stat[];
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, stats }) => {
  if (!isOpen) return null;

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('tr-TR');

    // Header
    doc.setFontSize(22);
    doc.setTextColor(227, 6, 19); // Saadet Red
    doc.text('ADIM ADIM', 14, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Dijital Seferberlik Platformu - Dashboard Özeti', 14, 30);
    doc.text(`Tarih: ${date}`, 160, 20);

    // Stats Table
    const statsData = stats.map(s => [s.label, s.value, s.change]);
    (doc as any).autoTable({
      startY: 40,
      head: [['Gösterge', 'Değer', 'Değişim']],
      body: statsData,
      theme: 'striped',
      headStyles: { fillColor: [227, 6, 19] }
    });

    // Recent Activity Placeholder
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('Performans Özeti', 14, finalY);
    
    doc.setFontSize(10);
    doc.text('Bu rapor platform üzerindeki aktif gönüllü faaliyetlerini ve sistem performansını özetlemektedir.', 14, finalY + 10);
    
    doc.save(`AdimAdim_Rapor_${date}.pdf`);
  };

  const generateExcel = () => {
    const date = new Date().toLocaleDateString('tr-TR');
    
    // Stats Sheet
    const ws_stats = XLSX.utils.json_to_sheet(stats.map(s => ({
      'Kategori': s.label,
      'Mevcut Değer': s.value,
      'Değişim Oranı': s.change
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws_stats, 'Dashboard Özet');

    // Additional Sheets (Mock Data)
    const mockTasks = [
      { id: '1', ad: 'Sosyal Medya Paylaşımı', puan: 50, durum: 'Aktif' },
      { id: '2', ad: 'Broşür Dağıtımı', puan: 150, durum: 'İnceleme Bekliyor' }
    ];
    const ws_tasks = XLSX.utils.json_to_sheet(mockTasks);
    XLSX.utils.book_append_sheet(wb, ws_tasks, 'Görevler');

    XLSX.writeFile(wb, `AdimAdim_Veri_Seti_${date}.xlsx`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-saadet-dark/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-saadet-red/10 rounded-2xl flex items-center justify-center text-saadet-red">
              <Download size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-800">Rapor Oluştur</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Format Seçiniz</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PDF Option */}
            <button 
              onClick={generatePDF}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl border-2 border-slate-100 hover:border-saadet-red hover:bg-red-50 transition-all group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-saadet-red group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <div className="text-center">
                <span className="block font-black text-slate-800 text-lg">PDF Raporu</span>
                <span className="text-xs text-slate-500 font-bold">Görsel Özet & Grafik</span>
              </div>
            </button>

            {/* Excel Option */}
            <button 
              onClick={generateExcel}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl border-2 border-slate-100 hover:border-green-600 hover:bg-green-50 transition-all group"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <FileSpreadsheet size={32} />
              </div>
              <div className="text-center">
                <span className="block font-black text-slate-800 text-lg">Excel Listesi</span>
                <span className="text-xs text-slate-500 font-bold">Düzenlenebilir Veri</span>
              </div>
            </button>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl flex item-start gap-3">
            <AlertCircle className="text-slate-400 shrink-0" size={18} />
            <p className="text-[10px] text-slate-500 leading-relaxed italic">
              * Raporlar sistemdeki güncel veriler (Gönüllüler, Görev Performansı ve Market İşlemleri) baz alınarak anlık olarak oluşturulmaktadır. 
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
