import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import jsonwebtoken from "jsonwebtoken";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";
import ApiAdapter from "~/lib/auth/api-adapter";
import { env } from "~/env.mjs";
import { setJWT, signInUser } from "~/lib/auth/mutations";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET,
    // async encode(params: {
    //   token: JWT;
    //   secret: string;
    //   maxAge: number;
    // }): Promise<string> {
    //   debugger;
    //   console.log("JWT Encode", { params });
    //   // return a custom encoded JWT string
    //   return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    // },
    // async decode(params: {
    //   token: string;
    //   secret: string;
    // }): Promise<JWT | null> {
    //   debugger;
    //   console.log("JWT Decode", { params });
    //   // return a `JWT` object, or `null` if decoding failed
    //   return {};
    // },
  },
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
    async signIn({ user, account, profile, email, credentials }) {
      // const response = await signInUser({
      //   user,
      //   account,
      //   profile,
      //   email,
      //   credentials,
      // });
      // debugger;

      // return response.status === 200;
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/auth";
    },
    async session({ session, user, token }) {
      // const encodedJWT = jsonwebtoken.sign(token, process.env.NEXTAUTH_SECRET);
      // const response = await setJWT(encodedJWT);
      // // debugger;
      // if (response.status === 200) {
      //   return session;
      // }
      // return null;
      const encodedJWT = jsonwebtoken.sign(token, process.env.NEXTAUTH_SECRET);

      return { ...session, accessToken: encodedJWT };
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // sendVerificationRequest: ({
      //   identifier: email,
      //   url,
      //   token,
      //   baseUrl,
      //   provider,
      // }) => {
      //   /* your function */
      //   debugger;
      // },
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: ApiAdapter(),
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
