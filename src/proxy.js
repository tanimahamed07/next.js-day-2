import { NextResponse } from "next/server";

export function proxy(request) {
    const {pathname} = request.nextUrl;
    if(!pathname.startsWith('/api/feedbacks')){
     return   NextResponse.json({
matcher: '/api/:path*'
        })
    }
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/about/:path*',
};
