<div dir="rtl">

# إبداع ديجيتال — صفحة الهبوط العربية

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)](https://eslint.org)

صفحة هبوط عربية (RTL) احترافية وحديثة مبنية بـ **Vite + React 18 + Tailwind CSS**، جاهزة للإنتاج.

---

## 🚀 البدء السريع

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل خادم التطوير
npm run dev
```

افتح المتصفح على `http://localhost:5173`

---

## 📁 هيكل المشروع

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      ← شريط التنقل اللاصق مع قائمة الجوال
│   │   └── Footer.jsx      ← تذييل الصفحة مع الروابط والشبكات
│   ├── sections/
│   │   ├── Hero.jsx        ← القسم الرئيسي مع إحصائيات متحركة
│   │   ├── Services.jsx    ← بطاقات الخدمات الست
│   │   ├── About.jsx       ← من نحن + عدادات أرقام
│   │   ├── Testimonials.jsx← آراء العملاء (carousel)
│   │   ├── FAQ.jsx         ← أكورديون الأسئلة الشائعة
│   │   └── Contact.jsx     ← نموذج التواصل مع التحقق
│   └── ui/
│       ├── Button.jsx      ← زر قابل لإعادة الاستخدام
│       ├── SectionHeader.jsx← رأس القسم (شارة + عنوان)
│       └── StarRating.jsx  ← نجوم التقييم
├── data/
│   └── content.js          ← ✏️ جميع النصوص والبيانات هنا
├── hooks/
│   ├── useInView.js        ← كشف دخول العنصر للشاشة
│   └── useCounter.js       ← تحريك الأرقام عند الظهور
├── utils/
│   └── form.js             ← دالة إرسال النموذج (معزولة)
├── styles/
│   └── globals.css         ← متغيرات التصميم والأنماط العامة
├── App.jsx
└── main.jsx
```

---

## ✏️ تعديل المحتوى

**كل النصوص والبيانات في ملف واحد:** `src/data/content.js`

| المتغير | ما يمكن تعديله |
|---------|--------------|
| `siteConfig` | اسم الشركة، الهاتف، البريد، العنوان، روابط الشبكات الاجتماعية |
| `navLinks` | روابط شريط التنقل |
| `hero` | العنوان الرئيسي، الوصف، أزرار CTA، الإحصائيات |
| `services` | بطاقات الخدمات (الأيقونة، العنوان، الوصف، اللون) |
| `about` | نص من نحن والإحصائيات |
| `testimonials` | آراء العملاء (الاسم، المسمى الوظيفي، الاقتباس، التقييم) |
| `faqItems` | الأسئلة الشائعة وإجاباتها |
| `contact` | تسميات النموذج ورسائل الخطأ والنجاح |
| `footerLinks` | أعمدة روابط التذييل |

### تعديل الأيقونات في الخدمات

الأيقونات من مكتبة [lucide-react](https://lucide.dev). لتغيير أيقونة خدمة، غيّر قيمة `icon` في `content.js` إلى اسم أي أيقونة من المكتبة، ثم أضفها إلى `iconMap` في `Services.jsx`:

```js
// في content.js
{ id: 'my-service', icon: 'Globe', title: '...', ... }

// في Services.jsx — أضف الاستيراد
import { Globe } from 'lucide-react'
const iconMap = { ..., Globe }
```

---

## 🎨 تعديل الألوان

افتح `tailwind.config.js` وعدّل الألوان في `theme.extend.colors`:

```js
colors: {
  primary: {
    600: '#1B4FFF',  // ← اللون الأساسي (أزرق افتراضيًا)
    700: '#1a3ecc',  // ← عند التمرير
  },
  secondary: {
    500: '#F59E0B',  // ← اللون الثانوي (عنبري افتراضيًا)
  },
}
```

---

## 📧 ربط نموذج التواصل

افتح `src/utils/form.js` وفعّل إحدى الخيارات:

### الخيار 1: Formspree (الأسهل — مجاني)

1. أنشئ حسابًا على [formspree.io](https://formspree.io)
2. أنشئ نموذجًا واحصل على معرّفه
3. فعّل الكود:

```js
export async function submitContactForm(data) {
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('فشل الإرسال')
  return { success: true }
}
```

### الخيار 2: EmailJS

```bash
npm install @emailjs/browser
```

```js
import emailjs from '@emailjs/browser'

export async function submitContactForm(data) {
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY')
  return { success: true }
}
```

### الخيار 3: API مخصص

```js
export async function submitContactForm(data) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}
```

---

## 🏗️ البناء للإنتاج

```bash
npm run build    # ينشئ مجلد dist/ جاهز للرفع
npm run preview  # معاينة البناء محليًا على http://localhost:4173
npm run lint     # فحص جودة الكود (0 أخطاء مطلوبة)
```

---

## ☁️ النشر

### Vercel (موصى به)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel --prod
```

أو ارفع المستودع على GitHub واستورده مباشرة من [vercel.com/new](https://vercel.com/new).

### Netlify

1. ارفع المستودع على GitHub
2. في Netlify: **New site → Import an existing project**
3. اضبط:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. انقر Deploy

### رفع يدوي

```bash
npm run build
# ارفع محتوى مجلد dist/ على أي استضافة ثابتة
```

---

## ⚡ الأداء والإمكانية

| المعيار | التفاصيل |
|---------|---------|
| RTL حقيقي | `<html lang="ar" dir="rtl">` + CSS logical properties |
| خط احترافي | Cairo عبر Google Fonts مع `font-display: swap` |
| الوصولية | دور ARIA، تسلسل عناوين صحيح، تنقل بلوحة المفاتيح |
| أداء | Bundle: ~97KB gzip، code-splitting تلقائي |
| الحركة | يحترم `prefers-reduced-motion` |
| النماذج | التحقق + رسائل خطأ عربية + honeypot لمكافحة البريد العشوائي |

---

## 🔧 المتطلبات

- Node.js 18+
- npm 9+

---

## 📄 الترخيص

للاستخدام الشخصي والتجاري بحرية.

</div>
