import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// protect users and conversations routes
export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
