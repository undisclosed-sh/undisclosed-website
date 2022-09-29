import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/style-guide',
}

export function middleware(req: NextRequest) {
  const search = req.nextUrl.search

  if (req.nextUrl.pathname === '/style-guide') {
    const allowed = typeof search === 'string' && search.includes('allowed=true')
    console.log('localStorageExists', search)

    if (!allowed) {
      req.nextUrl.pathname = '/'

      NextResponse.rewrite(req.nextUrl)
      return NextResponse.redirect('/')
    }
  }

  return NextResponse.next();
}
