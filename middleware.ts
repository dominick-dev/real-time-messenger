import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// protect user routes
export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
