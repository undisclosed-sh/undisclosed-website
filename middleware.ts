import { NextRequest, NextResponse } from 'next/server';

import { localStorageAvailable } from './utils'

export const config = {
  matcher: '/style-guide',
}

export function middleware(req: NextRequest) {
  const localStorageExists = localStorageAvailable()

  if (req.nextUrl.pathname === '/style-guide') {
    if (localStorageExists) {
      const styleGuideAvailable = localStorage.getItem('style-guide-unblocked');

      if (styleGuideAvailable === 'true') {
        req.nextUrl.pathname = '/'

        return NextResponse.rewrite(req.nextUrl)
      }
    }
  }

  return NextResponse.next();
}
