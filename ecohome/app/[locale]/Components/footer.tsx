'use client';

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
