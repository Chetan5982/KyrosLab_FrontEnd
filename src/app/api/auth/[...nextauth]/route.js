import { nodeUrl } from "@/constants/constants";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {},
      async authorize(credential, req) {
        const { email, password } = credential;
        const url = nodeUrl;
        try {
          const resp = await axios.post(`${url}/auth/login`, {
            email,
            password,
          });
          return resp.data;
        } catch (error) {
          throw Error(error?.response?.data?.message);
        }
      },
    }),
  ],
  site: process.env.NEXTAUTH_URL || "http://localhost:3000",
  session: {
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 3 * 60 * 60, // 3 hrs

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    jwt(params) {
      if (params?.user?.data?.role) {
        params.token.role = params.user.data.role;
        params.token.id = params.user.data.id;
        params.token.accessToken=params.user.data.token
      }
      return params.token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.accessToken=token.accessToken
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
