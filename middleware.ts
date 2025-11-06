// middleware.ts (letakkan di root project)
import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // Optional: custom logic ketika user sudah autentikasi
    // Misalnya, bisa memeriksa role atau menambahkan header.
    return;
  },
  {
    callbacks: {
      // redirect ke /login bila belum autentikasi
      authorized: ({ token }) => {
        return !!token; // true jika token (session) ada
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/chat/:path*", // tambahkan route privat lain jika perlu
  ],
};
