// Mock Data for "Adım Adım" Platform

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  bonusPoints: number;
  category: 'Dijital' | 'Saha' | 'Organizasyon' | 'Eğitim';
  status: 'DİREKT' | 'KANITLI';
  regionLock?: string;
  minLevel: number;
  isActive: boolean;
}

export interface UserStats {
  points: number;
  level: number;
  completedTasks: number;
  referrals: number;
}

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Instagram Hikaye Paylaşımı',
    description: 'Parti vizyon belgesini hikayende paylaş ve bizi etiketle.',
    points: 50,
    bonusPoints: 0,
    category: 'Dijital',
    status: 'DİREKT',
    minLevel: 1,
    isActive: true,
  },
  {
    id: '2',
    title: 'Mahalle Buluşması Katılımı',
    description: 'Bölgendeki mahalle buluşmasına katıl ve fotoğraf yükle.',
    points: 150,
    bonusPoints: 150,
    category: 'Saha',
    status: 'KANITLI',
    minLevel: 1,
    isActive: true,
  },
  {
    id: '3',
    title: 'Sandık Müşahitliği Eğitimi',
    description: 'Online eğitim modülünü tamamla.',
    points: 300,
    bonusPoints: 0,
    category: 'Eğitim',
    status: 'DİREKT',
    minLevel: 2,
    isActive: true,
  },
  {
    id: '4',
    title: 'Üye Formu Doldurtma',
    description: 'En az 3 yeni üye girişi yapılmasına vesile ol.',
    points: 500,
    bonusPoints: 500,
    category: 'Saha',
    status: 'KANITLI',
    minLevel: 3,
    isActive: true,
  },
];

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Özel Seri Parti Rozeti',
    price: 500,
    stock: 25,
    image: 'https://placehold.co/400x400/E30613/white?text=Rozet',
  },
  {
    id: '2',
    name: 'İmza Koleksiyon Kanvas Çanta',
    price: 1200,
    stock: 12,
    image: 'https://placehold.co/400x400/E30613/white?text=Çanta',
  },
  {
    id: '3',
    name: 'Vizyon Belgesi Prestij Kitabı',
    price: 2500,
    stock: 5,
    image: 'https://placehold.co/400x400/E30613/white?text=Kitap',
  },
];
