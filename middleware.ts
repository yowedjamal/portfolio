import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Gestion simplifiée des locales
  const pathname = request.nextUrl.pathname;
  const locales = ['fr', 'en'];
  const defaultLocale = 'fr';

  // Vérifier si le pathname commence par une locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Rediriger vers la locale par défaut si nécessaire
  if (pathnameIsMissingLocale && !pathname.startsWith('/api') && !pathname.includes('.')) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};