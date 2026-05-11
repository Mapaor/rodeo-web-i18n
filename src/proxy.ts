import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const middleware = createMiddleware(routing);

export default async function proxyMiddleware(request: NextRequest) {

  const response = await middleware(request);

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
