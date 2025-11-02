# 🥬 GreenHarvest - Organik Sebze Satış Platformu

![GreenHarvest Logo](https://img.shields.io/badge/GreenHarvest-Organic-A1C487?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Proje Hakkında

GreenHarvest, taze ve organik sebzeleri kullanıcılara ulaştırmayı hedefleyen modern bir tek sayfalık web sitesidir. Responsive tasarımı sayesinde tüm cihazlarda kusursuz bir deneyim sunar.

## ✨ Özellikler

- 📱 **Fully Responsive:** Mobile, Tablet ve Desktop için optimize edilmiş
- 🎨 **Modern Tasarım:** Clean ve minimalist arayüz
- ♿ **Accessible:** WCAG standartlarına uygun erişilebilirlik
- ⚡ **Fast Loading:** Optimize edilmiş görseller ve kod
- 🔍 **SEO Friendly:** Semantic HTML yapısı
- 🎯 **User-Friendly:** Kolay navigasyon ve kullanıcı deneyimi

## 🛠️ Kullanılan Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Flexbox, Grid, Variables)
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - DM Sans font family
- **SVG Sprites** - Optimize icon sistemi

## 📂 Proje Yapısı

```
greenharvest/
├── index.html                 # Ana HTML dosyası
├── css/
│   ├── reset.css             # CSS reset
│   ├── styles.css            # Ana stiller
│   └── responsive.css        # Responsive tasarım
├── js/
│   └── main.js               # JavaScript functionality
├── images/
│   ├── hero/                 # Hero section görselleri
│   ├── vegetables/           # Sebze görselleri
│   ├── reviews/              # Kullanıcı avatarları
│   ├── icons/                # Icon dosyaları
│   └── favicon/              # Favicon dosyaları
├── assets/
│   └── sprite.svg            # SVG icon sprite
└── README.md                 # Bu dosya
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)
- (Opsiyonel) Visual Studio Code + Live Server extension
- (Opsiyonel) Python (SimpleHTTPServer için)

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/kullanici-adi/greenharvest.git
cd greenharvest
```

2. **Live Server ile çalıştırın (VS Code):**
   - Projeyi VS Code'da açın
   - `index.html` dosyasına sağ tıklayın
   - "Open with Live Server" seçin

3. **Python ile çalıştırın:**
```bash
python -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

4. **Direkt olarak:**
   - `index.html` dosyasını çift tıklayarak tarayıcıda açın

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1279px
- **Desktop:** 1280px+

## 🎨 Renk Paleti

```css
--color-primary: #A1C487       /* Ana yeşil */
--color-primary-dark: #8AB569  /* Koyu yeşil */
--color-secondary: #EAF7E5     /* Açık yeşil */
--color-accent: #FD9222        /* Turuncu (rating) */
--color-text-primary: #141414  /* Ana metin */
--color-text-secondary: #737373 /* İkincil metin */
```

## 🧩 Bölümler

1. **Header** - Logo ve navigasyon
2. **Hero** - Ana başlık ve CTA
3. **How It Works** - 3 adımlı sipariş süreci
4. **Advertisement** - Tanıtım bölümü
5. **Vegetables** - Ürün kataloğu (9 ürün)
6. **Reviews** - Müşteri yorumları
7. **Your Order** - Sipariş formu ve sosyal medya
8. **Footer** - İletişim ve site linkleri

## ✅ Özellikler ve Fonksiyonalite

### JavaScript Features:
- ✅ Responsive mobil menü
- ✅ Smooth scrolling navigasyon
- ✅ Form validation (email pattern)
- ✅ Add to cart functionality
- ✅ Scroll animations
- ✅ Lazy loading (opsiyonel)

### CSS Features:
- ✅ CSS Variables
- ✅ Flexbox & Grid Layout
- ✅ Smooth transitions
- ✅ Hover effects
- ✅ Mobile-first approach
- ✅ Retina display support

## 🔍 SEO & Accessibility

- ✅ Semantic HTML5 tags
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Color contrast compliance

## 🧪 Test Edilen Tarayıcılar

- ✅ Chrome 120+
- ✅ Firefox 121+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📊 Performance

- **Lighthouse Score:** 90+
- **First Contentful Paint:** <2s
- **Time to Interactive:** <3s
- **Optimize edilmiş görseller:** WebP/PNG
- **Minified CSS/JS:** Production için

## 🐛 Bilinen Sorunlar

- Yok (şu an için)

## 📝 Yapılacaklar (Future Features)

- [ ] Dark mode toggle
- [ ] Shopping cart with localStorage
- [ ] Product filtering
- [ ] Multi-language support
- [ ] Backend integration
- [ ] Payment gateway
- [ ] User authentication

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Adınız Soyadınız**
- GitHub: [@kullanici-adi](https://github.com/kullanici-adi)
- LinkedIn: [linkedin.com/in/profil](https://linkedin.com/in/profil)
- Email: email@example.com

## 🙏 Teşekkürler

- [GoIT Türkiye](https://goit.global/tr/) - Eğitim ve destek için
- [Google Fonts](https://fonts.google.com/) - DM Sans font için
- [Figma](https://figma.com) - Tasarım aracı için

## 📸 Ekran Görüntüleri

### Desktop
![Desktop Screenshot](./screenshots/desktop.png)

### Tablet
![Tablet Screenshot](./screenshots/tablet.png)

### Mobile
![Mobile Screenshot](./screenshots/mobile.png)

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Son Güncelleme:** Kasım 2024