import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

export default function middleware(request: NextRequest) {
  const intlHandler = createIntlMiddleware(routing);

  const response = intlHandler(request);

  if (!(response instanceof Response)) {
    return response;
  }

  const requestHeaders = new Headers(request.headers);

  const newResponse = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  newResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  return newResponse;
}

export const config = {
  matcher: ['/', '/(uk|ru)/:path*'],
};
