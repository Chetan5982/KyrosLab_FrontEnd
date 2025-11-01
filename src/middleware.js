import { NextResponse } from "next/server";
import { nodeUrl } from "./constants/constants";

// This function can be marked `async` if using `await` inside
export default async function middleware(request) {
  try {
    if (
      request.nextUrl.pathname.startsWith("/api/") ||
      request.nextUrl.pathname.startsWith("/_next/")
    ) {
      return NextResponse.next();
    }
    const response = await fetch(`${nodeUrl}/redirect`, {
      next: {
        cache: "no-store",
      },
    });
    const { data } = await response.json();
    // const findUrl = data.find(
    //   (item) => item.source === request.nextUrl.pathname
    // );
    // console.log(data,'data',findUrl,"=====>>>",request.nextUrl.pathname);

    // if (findUrl) {
    //   const response= NextResponse.redirect(new URL(findUrl.destination, request.url), {
    //     status: findUrl.permanent ? 301 : 302,
    //   });
    //   response.headers.set('x-middleware-cache', 'no-cache')
    //   return response
    // }
    return NextResponse.next();
  } catch (error) {
    console.log(error);
  }

  //   return NextResponse.redirect(new URL());
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
