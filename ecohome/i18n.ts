import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, fallback to 'ar' if not
  const validLocale = locale && ['ar', 'en'].includes(locale) ? locale : 'ar';
  
  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default
  };
});
