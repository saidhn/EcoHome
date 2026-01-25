# Internationalization (i18n) Implementation Todo List
## Adding Arabic & English Language Support with Switcher

---

## 📋 Phase 1: Setup & Configuration (High Priority)

### ✅ Task 1: Choose and Install i18n Library
**Recommendation: Use `next-intl` (Best for Next.js 14 App Router)**

```bash
npm install next-intl
```

**Why next-intl?**
- Built specifically for Next.js App Router
- Server-side rendering support
- Type-safe translations
- Better performance than react-i18next for Next.js

**Files to modify:**
- `package.json` (auto-updated by npm)

---

### ✅ Task 2: Configure Next.js for i18n

**Update `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
```

**Create `i18n.ts` in root directory:**
```typescript
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}.json`)).default
}));
```

**Files to create:**
- `/i18n.ts`

**Files to modify:**
- `next.config.js`

---

### ✅ Task 3: Update Middleware for Language Routing

**Update `middleware.js` to `middleware.ts`:**
```typescript
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always' // URLs will be /ar/... and /en/...
});

export default function middleware(req: any) {
  const { pathname } = req.nextUrl;

  // Handle dashboard authentication first
  if (pathname.includes('/dashboard/login')) {
    return NextResponse.next();
  }

  if (pathname.includes('/dashboard')) {
    const token = req.cookies.get('dashboard_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/ar/dashboard/login', req.url));
    }
  }

  // Apply i18n middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Files to modify:**
- `middleware.js` → rename to `middleware.ts`

---

## 📋 Phase 2: Translation Files Structure (High Priority)

### ✅ Task 4: Create Locales Directory Structure

**Create folder structure:**
```
/locales
  /ar.json
  /en.json
```

**Files to create:**
- `/locales/ar.json`
- `/locales/en.json`

---

### ✅ Task 5: Extract Arabic Text and Create ar.json

**Create `/locales/ar.json`:**
```json
{
  "common": {
    "company_name": "ReframeBuilds",
    "tagline": "منازل ذكية مستدامة وجاهزة للسكن"
  },
  "nav": {
    "home": "الرئيسية",
    "projects": "مشاريعنا",
    "services": "خدماتنا",
    "about": "عنا",
    "contact": "تواصل",
    "get_quote": "عرض سعر"
  },
  "hero": {
    "title": "ذكية. مستدامة. منازل جاهزة للسكن",
    "subtitle": "استمتع بمستقبل عيشٍ أفضل مع منازلنا الجاهزة المصممة بإتقان. تصميم مستدام يتناغم مع الراحة العصرية.",
    "cta": "اكتشفنا"
  },
  "whyUs": {
    "title": "لماذا تختار reframebuilds",
    "subtitle": "نحن ملتزمون بتقديم منازل استثنائية تجمع بين الابتكار والاستدامة والقدرة على تحمل التكاليف.",
    "features": {
      "sustainable": {
        "title": "مستدام",
        "description": "مواد صديقة للبيئة وتصميم موفر للطاقة للحد من التأثير البيئي"
      },
      "fast_delivery": {
        "title": "توصيل سريع",
        "description": "انتقل إلى منزل أحلامك في غضون أسابيع، مع عمليتنا المبسطة"
      },
      "quality": {
        "title": "الجودة المبنية",
        "description": "معايير بناء متميزة مع مراقبة جودة صارمة في كل مرحلة"
      },
      "value": {
        "title": "قيمة عظيمة",
        "description": "أسعار معقولة دون المساومة على التصميم أو جودة المواد"
      }
    }
  },
  "about": {
    "title": "معلومات عنا",
    "subtitle": "نحن رواد مستقبل المعيشة المستدامة لقدرتنا على تصميم وبناء المساكن الجاهزة والمبتكرة."
  },
  "contact": {
    "title": "تواصل معنا",
    "subtitle": "هل أنت مستعد لبدء رحلتك نحو حياة مستدامة؟ يسعدنا التواصل معك.",
    "form": {
      "title": "أطلب عرض أسعار",
      "name": "الاسم الكامل",
      "name_placeholder": "الاسم",
      "email": "البريد الالكتروني",
      "email_placeholder": "البريد",
      "phone": "رقم الهاتف",
      "phone_placeholder": "رقم الهاتف",
      "subject": "الموضوع",
      "subject_placeholder": "الموضوع",
      "message": "الرسالة",
      "message_placeholder": "اكتب رسالتك هنا...",
      "submit": "إرسال",
      "success": "✅ تم إرسال الرسالة بنجاح!",
      "error": "❌ فشل في إرسال الرسالة، حاول مرة أخرى.",
      "error_generic": "❌ حدث خطأ أثناء الإرسال.",
      "validation": {
        "name_required": "الاسم مطلوب",
        "email_invalid": "البريد غير صالح",
        "message_required": "الرسالة فارغة"
      }
    },
    "info": {
      "location_title": "موقعنا",
      "location_address": "غزة - النصر - الشارع الثاني بجوار شركة الإتصالات",
      "phone_title": "اتصال",
      "email_title": "الإيميل"
    }
  },
  "footer": {
    "company_section": "الشركة",
    "about": "عن الشركة",
    "products": "منتجاتنا",
    "support_section": "دعم فني",
    "contact_us": "تواصل معنا",
    "contact_section": "تواصل معنا",
    "copyright": "© 2025 reframebuilds. All rights reserved."
  }
}
```

**Files to create:**
- `/locales/ar.json`

---

### ✅ Task 6: Create English Translations (en.json)

**Create `/locales/en.json`:**
```json
{
  "common": {
    "company_name": "ReframeBuilds",
    "tagline": "Smart. Sustainable. Ready-to-Live Homes"
  },
  "nav": {
    "home": "Home",
    "projects": "Our Projects",
    "services": "Our Services",
    "about": "About Us",
    "contact": "Contact",
    "get_quote": "Get Quote"
  },
  "hero": {
    "title": "Smart. Sustainable. Ready-to-Live Homes",
    "subtitle": "Experience the future of better living with our expertly designed ready-made homes. Sustainable design harmonized with modern comfort.",
    "cta": "Discover Us"
  },
  "whyUs": {
    "title": "Why Choose ReframeBuilds",
    "subtitle": "We are committed to delivering exceptional homes that combine innovation, sustainability, and affordability.",
    "features": {
      "sustainable": {
        "title": "Sustainable",
        "description": "Eco-friendly materials and energy-efficient design to reduce environmental impact"
      },
      "fast_delivery": {
        "title": "Fast Delivery",
        "description": "Move into your dream home within weeks with our streamlined process"
      },
      "quality": {
        "title": "Quality Built",
        "description": "Premium building standards with strict quality control at every stage"
      },
      "value": {
        "title": "Great Value",
        "description": "Affordable prices without compromising on design or material quality"
      }
    }
  },
  "about": {
    "title": "About Us",
    "subtitle": "We are pioneers in the future of sustainable living through our ability to design and build innovative ready-made homes."
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "Are you ready to start your journey towards sustainable living? We'd love to hear from you.",
    "form": {
      "title": "Request a Quote",
      "name": "Full Name",
      "name_placeholder": "Name",
      "email": "Email Address",
      "email_placeholder": "Email",
      "phone": "Phone Number",
      "phone_placeholder": "Phone Number",
      "subject": "Subject",
      "subject_placeholder": "Subject",
      "message": "Message",
      "message_placeholder": "Write your message here...",
      "submit": "Send",
      "success": "✅ Message sent successfully!",
      "error": "❌ Failed to send message, please try again.",
      "error_generic": "❌ An error occurred while sending.",
      "validation": {
        "name_required": "Name is required",
        "email_invalid": "Invalid email address",
        "message_required": "Message is empty"
      }
    },
    "info": {
      "location_title": "Our Location",
      "location_address": "Gaza - Al-Nasr - Second Street next to the Telecommunications Company",
      "phone_title": "Phone",
      "email_title": "Email"
    }
  },
  "footer": {
    "company_section": "Company",
    "about": "About Company",
    "products": "Our Products",
    "support_section": "Support",
    "contact_us": "Contact Us",
    "contact_section": "Contact Us",
    "copyright": "© 2025 reframebuilds. All rights reserved."
  }
}
```

**Files to create:**
- `/locales/en.json`

---

## 📋 Phase 3: Layout & Font Configuration (High Priority)

### ✅ Task 7: Update Root Layout for Dynamic Language

**Restructure app directory:**
```
/app
  /[locale]
    /layout.tsx (new root layout)
    /page.tsx
    /about/
    /contact/
    /projects/
    /service/
    /Components/
```

**Create `/app/[locale]/layout.tsx`:**
```typescript
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../global.css';

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ReframeBuilds",
  description: "ReframeBuilds company for luxury Homes",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={`${isRTL ? cairo.className : inter.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Files to create:**
- `/app/[locale]/layout.tsx`

**Files to move:**
- Move all pages from `/app/*` to `/app/[locale]/*`

---

### ✅ Task 8: Add English Font Support

Already included in Task 7 above with Inter font.

**Fonts configured:**
- Arabic: Cairo (existing)
- English: Inter (new)

---

## 📋 Phase 4: Language Switcher Component (Medium Priority)

### ✅ Task 9: Create Language Switcher Component

**Create `/app/[locale]/Components/LanguageSwitcher.tsx`:**
```typescript
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    // Remove current locale from pathname and add new one
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-[#C09059]"
      aria-label="Switch Language"
    >
      <Globe size={20} className="text-[#C09059]" />
      <span className="text-[#C09059] font-medium">
        {locale === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
}
```

**Files to create:**
- `/app/[locale]/Components/LanguageSwitcher.tsx`

---

### ✅ Task 10: Integrate Language Switcher into Navbar

**Update `/app/[locale]/Components/Navbar.tsx`:**
```typescript
import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
  const t = useTranslations('nav');
  
  return (
    <nav className="flex flex-wrap shadow-md items-center justify-around p-4 bg-gray-100">
      <div>
        <Link href="/" className="text-xl items-center flex font-bold text-[#C09059] cursor-pointer">
          <img src="/reframebuilds.png" width={50} alt="ReframeBuilds"/> 
        </Link>
      </div>
      <div className="flex gap-6 text-[#C09059] items-center">
        <Link href="/contact" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('contact')}
        </Link>
        <Link href="/about" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('about')}
        </Link>
        <Link href="/service" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('services')}
        </Link>
        <Link href="/projects" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('projects')}
        </Link>
        <Link href="/" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('home')}
        </Link>
        <LanguageSwitcher />
      </div>
      <div>
        {/* Optional: Get Quote button */}
      </div>
    </nav> 
  );
};

export default NavBar;
```

**Files to modify:**
- `/app/[locale]/Components/Navbar.tsx`

---

## 📋 Phase 5: Update All Components (High Priority)

### ✅ Task 11: Update Hero Component

**Update `/app/[locale]/Components/hero.tsx`:**
```typescript
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  
  return (
    <section className="relative w-full h-[80vh]">
      <video
        src="/HERO.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t('title')}
        </h1>
        <p className="max-w-xl text-lg md:text-xl">
          {t('subtitle')}
        </p>
        <Link href='/projects'
          className="mt-4 bg-[#C09059] transition-colors duration-200 hover:bg-[#ddac73] px-6 py-3 rounded-lg text-white font-semibold"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
```

**Files to modify:**
- `/app/[locale]/Components/hero.tsx`

---

### ✅ Task 12: Update WhyUs Component

**Update `/app/[locale]/Components/whyus.tsx`:**
```typescript
'use client';

import { useTranslations } from 'next-intl';
import { Leaf, Truck, BadgeCheck, Gem } from 'lucide-react';

const WhyUs = () => {
  const t = useTranslations('whyUs');
  
  const features = [
    {
      id: 1,
      icon: Leaf,
      key: 'sustainable'
    },
    {
      id: 2,
      icon: Truck,
      key: 'fast_delivery'
    },
    {
      id: 3,
      icon: BadgeCheck,
      key: 'quality'
    },
    {
      id: 4,
      icon: Gem,
      key: 'value'
    }
  ];

  return (
    <section className="bg-[#EEEAE2]">
      <div className="text-center">
        <h2 className="font-bold py-5 text-[#474747] text-3xl">
          {t('title')}
        </h2>
        <p className="text-center text-[#606060] px-3 mb-5">
          {t('subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow transition transform hover:scale-110 hover:bg-[#C09059] flex items-center justify-center">
                <Icon size={40} className="text-[#C09059] hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-[#474747] text-lg">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 text-[#606060]">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
```

**Files to modify:**
- `/app/[locale]/Components/whyus.tsx`

**Files to delete (no longer needed):**
- `/app/db/why.tsx` (data moved to translation files)

---

### ✅ Task 13: Update Footer Component

**Update `/app/[locale]/Components/footer.tsx`:**
```typescript
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  
  return (
    <footer className="bg-[#EEEAE2] text-gray-700 mt-5 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h4 className="font-bold mb-4">{tCommon('company_name')}</h4>
          <p>{tCommon('tagline')}</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('company_section')}</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-[#C09059]">{t('about')}</a></li>
            <li><a href="/projects" className="hover:text-[#C09059]">{t('products')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('support_section')}</h4>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-[#C09059]">{t('contact_us')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('contact_section')}</h4>
          <p>+972 59-753-9554</p>
          <p>basel_1100@hotmail.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        {t('copyright')}
      </div>
    </footer>
  );
};

export default Footer;
```

**Files to modify:**
- `/app/[locale]/Components/footer.tsx`

---

### ✅ Task 14: Update Contact Page

**Update `/app/[locale]/contact/page.jsx` to `page.tsx`:**
```typescript
"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from 'next-intl';
import NavBar from "../Components/Navbar";
import Footer from "../Components/footer";

const ContactUs = () => {
  const t = useTranslations('contact');
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return t('form.validation.name_required');
    if (!/\S+@\S+\.\S+/.test(form.email)) return t('form.validation.email_invalid');
    if (!form.message.trim()) return t('form.validation.message_required');
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return alert(error);

    setLoading(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert(t('form.success'));
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert(t('form.error'));
      }
    } catch (err) {
      console.error(err);
      alert(t('form.error_generic'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="text-center bg-[#EEEAE2] py-5">
          <h2 className="font-bold py-5 text-[#474747] text-3xl">{t('title')}</h2>
          <p className="text-center text-[#606060] mb-5">
            {t('subtitle')}
          </p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 my-10">
          <div className="md:w-2/3 px-3 flex">
            <form onSubmit={handleSubmit} className="bg-white border border-[#707070] p-6 rounded-xl shadow-md w-full flex flex-col justify-between space-y-4">
              <h3 className="text-[#C09059] font-bold text-2xl mb-2">{t('form.title')}</h3>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <label htmlFor="name" className="mb-1 text-gray-700 font-medium">
                    {t('form.name')}
                  </label>
                  <input
                    placeholder={t('form.name_placeholder')}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                    {t('form.email')}
                  </label>
                  <input
                    placeholder={t('form.email_placeholder')}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">
                    {t('form.phone')}
                  </label>
                  <input
                    placeholder={t('form.phone_placeholder')}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="number"
                    className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                  <label htmlFor="subject" className="mb-1 text-gray-700 font-medium">
                    {t('form.subject')}
                  </label>
                  <input
                    placeholder={t('form.subject_placeholder')}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-gray-700 font-medium">
                  {t('form.message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('form.message_placeholder')}
                  className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#C09059] text-white font-bold px-10 py-2 shadow-md cursor-pointer rounded-md hover:bg-[#ddac73] transition self-start disabled:opacity-50"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>

          <div className="md:w-1/3 px-3 flex">
            <div className="bg-white border border-[#707070] p-6 rounded-xl shadow-md w-full flex flex-col justify-center space-y-6">
              <div className="flex gap-3 items-start">
                <MapPin className="text-[#C09059]" size={36} />
                <div>
                  <h3 className="font-bold text-[#707070] text-xl">{t('info.location_title')}</h3>
                  <p className="text-[#707070] leading-snug">
                    {t('info.location_address')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="text-[#C09059]" size={36} />
                <div>
                  <h3 className="font-bold text-[#707070] text-xl">{t('info.phone_title')}</h3>
                  <p className="text-[#707070]">+972 59-753-9554</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="text-[#C09059]" size={36} />
                <div>
                  <h3 className="font-bold text-[#707070] text-xl">{t('info.email_title')}</h3>
                  <p className="text-[#707070]">baselher@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
```

**Files to modify:**
- `/app/[locale]/contact/page.jsx` → rename to `page.tsx`

---

### ✅ Task 15: Update About Page

**Update `/app/[locale]/about/page.tsx`:**
```typescript
import { useTranslations } from 'next-intl';
import NavBar from "../Components/Navbar";
import OurValues from "./Components/Ourvalues";
import Story from "./Components/story";

const About = () => {
  const t = useTranslations('about');
  
  return (
    <>
      <NavBar />
      <section>
        <div className="text-center bg-[#EEEAE2] py-5">
          <h2 className="font-bold py-5 text-[#474747] text-3xl">{t('title')}</h2>
          <p className="text-center text-[#606060] px-3 mb-5">
            {t('subtitle')}
          </p>
        </div>

        <div>
          <Story />
          <OurValues />
        </div>
      </section>
    </>
  );
};

export default About;
```

**Files to modify:**
- `/app/[locale]/about/page.tsx`

**Note:** You'll need to add translations for Story and OurValues components as well.

---

### ✅ Task 16: Update Remaining Pages

**Pages to update with translations:**
- `/app/[locale]/projects/page.tsx`
- `/app/[locale]/service/page.tsx`
- `/app/[locale]/about/Components/story.tsx`
- `/app/[locale]/about/Components/Ourvalues.tsx`
- `/app/[locale]/models/featuerModels.tsx`

**Process for each:**
1. Import `useTranslations` from 'next-intl'
2. Extract hardcoded text to translation files
3. Replace with `t('key')` calls

---

## 📋 Phase 6: RTL/LTR Styling (Medium Priority)

### ✅ Task 17: Update Tailwind for RTL Support

**Install RTL plugin:**
```bash
npm install tailwindcss-rtl
```

**Update `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
```

**Files to modify:**
- `tailwind.config.js`

---

### ✅ Task 18: Test and Fix Layout Issues

**Common RTL/LTR issues to check:**
- Flexbox direction (use `flex-row` and let dir handle it)
- Text alignment (use `text-start` instead of `text-left`)
- Padding/margin (use logical properties: `ps-4` instead of `pl-4`)
- Absolute positioning
- Border radius

**Files to review and fix:**
- All component files for hardcoded directional classes

---

## 📋 Phase 7: SEO & Metadata (Low Priority)

### ✅ Task 19: Update Metadata for Each Language

**Update `/app/[locale]/layout.tsx` metadata:**
```typescript
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = await getMessages({ locale });
  
  return {
    title: locale === 'ar' ? 'ReframeBuilds - منازل ذكية ومستدامة' : 'ReframeBuilds - Smart Sustainable Homes',
    description: locale === 'ar' 
      ? 'نحن رواد مستقبل المعيشة المستدامة لقدرتنا على تصميم وبناء المساكن الجاهزة والمبتكرة'
      : 'We are pioneers in the future of sustainable living through our ability to design and build innovative ready-made homes',
  };
}
```

**Files to modify:**
- `/app/[locale]/layout.tsx`

---

### ✅ Task 20: Add Hreflang Tags

**Update `/app/[locale]/layout.tsx`:**
```typescript
export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <link rel="alternate" hrefLang="ar" href="https://yourdomain.com/ar" />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/ar" />
      </head>
      <body className={`${isRTL ? cairo.className : inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Files to modify:**
- `/app/[locale]/layout.tsx`

---

## 📋 Phase 8: Testing & Optimization (Low Priority)

### ✅ Task 21: Test All Pages in Both Languages

**Testing checklist:**
- [ ] Home page displays correctly in AR/EN
- [ ] About page displays correctly in AR/EN
- [ ] Contact page displays correctly in AR/EN
- [ ] Projects page displays correctly in AR/EN
- [ ] Services page displays correctly in AR/EN
- [ ] Language switcher works on all pages
- [ ] URLs update correctly (/ar/*, /en/*)
- [ ] Forms submit correctly in both languages
- [ ] Validation messages show in correct language

---

### ✅ Task 22: Test RTL/LTR Layout

**Layout testing checklist:**
- [ ] Navigation menu aligns correctly
- [ ] Text direction is correct
- [ ] Images and icons align properly
- [ ] Forms layout correctly
- [ ] Footer sections align properly
- [ ] Responsive design works in both directions
- [ ] Animations/transitions work correctly

---

### ✅ Task 23: Performance Optimization

**Optimization tasks:**
- [ ] Check bundle size for translation files
- [ ] Lazy load translations if needed
- [ ] Optimize font loading for both languages
- [ ] Test page load times in both languages
- [ ] Verify no layout shift when switching languages

---

### ✅ Task 24: Browser Testing

**Test in multiple browsers:**
- [ ] Chrome (RTL/LTR)
- [ ] Firefox (RTL/LTR)
- [ ] Safari (RTL/LTR)
- [ ] Edge (RTL/LTR)
- [ ] Mobile browsers (iOS/Android)

---

## 📋 Phase 9: Documentation & Deployment

### ✅ Task 25: Update README

**Add to README.md:**
- Language switching instructions
- Translation file structure
- How to add new translations
- RTL/LTR considerations

---

### ✅ Task 26: Create Translation Guide

**Create `TRANSLATION_GUIDE.md`:**
- How to add new translation keys
- Naming conventions
- Best practices for translators
- How to test translations

---

## 🎯 Summary Checklist

### High Priority (Must Complete First)
- [ ] Install and configure next-intl
- [ ] Create translation files (ar.json, en.json)
- [ ] Restructure app directory with [locale]
- [ ] Update root layout for dynamic language
- [ ] Update all components to use translations
- [ ] Create and integrate language switcher

### Medium Priority (Complete Second)
- [ ] Configure middleware for language routing
- [ ] Add English font support
- [ ] Update CSS for RTL/LTR support
- [ ] Add language preference persistence

### Low Priority (Polish & Finalize)
- [ ] Update SEO metadata
- [ ] Add hreflang tags
- [ ] Complete testing
- [ ] Performance optimization
- [ ] Documentation

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install next-intl tailwindcss-rtl

# Run development server
npm run dev

# Test in Arabic
http://localhost:3000/ar

# Test in English
http://localhost:3000/en
```

---

## 📝 Notes

1. **Default Language:** Arabic (ar) is set as default
2. **URL Structure:** All URLs will be prefixed with language code (/ar/*, /en/*)
3. **Font Strategy:** Cairo for Arabic, Inter for English
4. **Direction:** Automatic RTL for Arabic, LTR for English
5. **Persistence:** Language preference can be saved in cookies/localStorage

---

## ⚠️ Common Pitfalls to Avoid

1. Don't hardcode text in components
2. Don't forget to update API routes if they return user-facing messages
3. Don't use directional CSS classes (left/right) - use logical properties
4. Don't forget to translate error messages and validation
5. Don't skip testing in both languages before deployment

---

## 🔗 Useful Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Tailwind RTL Plugin](https://github.com/20lives/tailwindcss-rtl)
- [RTL Styling Best Practices](https://rtlstyling.com/)

---

**Last Updated:** January 23, 2026
**Project:** EcoHome ReframeBuilds
**Languages:** Arabic (AR) & English (EN)
