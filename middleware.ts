// import { NextRequest, NextResponse } from 'next/server';

// const protectedPagePath = '/protected';

export const config = {
  matcher: ['/protected'],
}

// export function middleware(req: NextRequest) {
//   const url = new URL(req.url)
//   const searchParams = url.search

//   if (url.pathname.indexOf(protectedPagePath) > -1) {
//     const allowed = typeof searchParams === 'string' && searchParams.includes('allowed=true')

//     // if (!allowed) {
//     //   NextResponse.rewrite(new URL('/', req.url))
//     //   return NextResponse.redirect(new URL('/', req.url))
//     // }

//     // return NextResponse.redirect(new URL(req.url.replace(searchParams, ''), req.url))
//   }

//   return NextResponse.next();
// }
