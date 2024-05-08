import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { signInSchema } from "./lib/zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = signInSchema.parse(credentials); 
          const user = await prisma.user.findUnique({
            where: { username: username }
          });
          if (!user)
            return null;
          if (!(await bcrypt.compare(password, user.password)))
            return null;
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
});
