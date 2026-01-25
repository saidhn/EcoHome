import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Create the i18n middleware
const intlMiddleware = createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always' // URLs will be /ar/... and /en/...
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Handle dashboard authentication first (before i18n middleware)
  // Extract locale from pathname (e.g., /ar/dashboard/login -> ar)
  const pathnameLocale = pathname.split('/')[1];
  const locale = ['ar', 'en'].includes(pathnameLocale) ? pathnameLocale : 'ar';

  // Protect dashboard routes (but allow login page)
  if (pathname.includes('/dashboard') && !pathname.includes('/dashboard/login')) {
    const token = req.cookies.get('dashboard_token')?.value;

    if (!token) {
      // Redirect to login page with proper locale
      return NextResponse.redirect(new URL(`/${locale}/dashboard/login`, req.url));
    }
  }

  // Apply i18n middleware for all routes
  return intlMiddleware(req);
}

export const config = {
  // Match all pathnames except for:
  // - api routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - files with extensions (e.g. favicon.ico, images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
