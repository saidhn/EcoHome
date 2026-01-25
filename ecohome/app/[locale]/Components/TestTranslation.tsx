'use client';

import { useLocale, useTranslations } from 'next-intl';

export default function TestTranslation() {
  const locale = useLocale();
  const t = useTranslations('nav');
  
  return (
    <div className="p-4 bg-yellow-100 border-2 border-yellow-500">
      <p>Current locale: {locale}</p>
      <p>Home translation: {t('home')}</p>
      <p>About translation: {t('about')}</p>
    </div>
  );
}
