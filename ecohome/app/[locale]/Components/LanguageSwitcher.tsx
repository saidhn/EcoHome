'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === 'ar' ? 'en' : 'ar';
  // Remove current locale from pathname and add new one
  const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

  return (
    <Link
      href={newPathname}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-[#C09059]"
      aria-label="Switch Language"
    >
      <Globe size={20} className="text-[#C09059]" />
      <span className="text-[#C09059] font-medium">
        {locale === 'ar' ? 'EN' : 'AR'}
      </span>
    </Link>
  );
}
