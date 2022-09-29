import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/protected/:path*',
}

export function middleware(req: NextRequest) {
  const search = req.nextUrl.search

  if (req.nextUrl.pathname === '/style-guide') {
    const allowed = typeof search === 'string' && search.includes('allowed=true')

    if (!allowed) {
      req.nextUrl.pathname = '/'

      NextResponse.rewrite(req.nextUrl)
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next();
}
