import { NextRequest, NextResponse } from 'next/server';

const protectedPagePath = '/protected';

export const config = {
  matcher: protectedPagePath + '/:path*',
}

export function middleware(req: NextRequest) {
  const search = req.nextUrl.search

  if (req.nextUrl.pathname === `${protectedPagePath}/style-guide`) {
    const allowed = typeof search === 'string' && search.includes('allowed=true')

    if (!allowed) {
      req.nextUrl.pathname = '/'

      NextResponse.rewrite(req.nextUrl)
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next();
}
