# Rapkology - Türkiye'nin En Büyük Rap Müzik Platformu

Modern web teknolojileri ile geliştirilmiş rap müzik keşif platformu.

## 🎯 Özellikler

- **Dinamik İçerik Filtreleme**: Kategorilere göre içerik filtreleme
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Modern UI**: Tailwind CSS ile tasarlanmış arayüz
- **SEO Optimizasyonu**: Arama motoru dostu yapı

## 🛠️ Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - UI components

## 🚀 Kurulum

1. **Projeyi klonlayın**:
```bash
git clone <repository-url>
cd codezone-assignment
```

2. **Bağımlılıkları yükleyin**:
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**:
```bash
npm run dev
```

4. **Tarayıcıda açın**: http://localhost:3000

## 📁 Proje Yapısı

```
├── app/                 # Next.js sayfaları
├── components/          # React bileşenleri
│   ├── explore/        # Keşif bölümü
│   ├── layout/         # Layout bileşenleri
│   └── ui/             # UI bileşenleri
├── data/               # Veri dosyaları
└── public/             # Statik dosyalar
```

## 🎨 Ana Bileşenler

### ExploreMain
Ana keşif bileşeni - içerik filtreleme ve arama işlevselliği

### ExploreCategories  
Kategori seçimi ve filtreleme kontrolleri

### ExploreSection
Masaüstü ve mobil layout yönetimi

## 🔧 Filtreleme Sistemi

Kategoriler ve içerik etiketleri arasında mapping sistemi:

```typescript
const categoryTagMapping = {
  "turk-rap": ["Türk Rap"],
  "haftanin-klipleri": ["Haftanın Videoları"],
  "ayin-klipleri": ["Ayın Videoları"]
};
```

## 📦 Ana Bağımlılıklar

```json
{
  "next": "14.2.16",
  "react": "^18",
  "typescript": "^5",
  "tailwindcss": "^4.1.9",
  "@radix-ui/*": "latest",
  "lucide-react": "^0.454.0"
}
```

## 🎯 Geliştirme Komutları

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucu
npm run lint     # Code linting
```

## 📱 Tarayıcı Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**Versiyon**: 1.0.0  
**Geliştirici**: Rapkology Development Team
