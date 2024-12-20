import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import userModel from "./models/userModel";
import bcrypt from "bcryptjs";
import { dbConnect } from "./helpers/connectDB";

dbConnect();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password must be provided.");
        }

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const user = await userModel.findOne({ email });

          if (!user) {
            throw new Error("No user found with the provided email.");
          }

          const validPassword = await bcrypt.compare(password, user.password);

          if (!validPassword) {
            throw new Error("Invalid password.");
          }

          return {
            id: user._id,
            name: user.username,
            email: user.email,
          };
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        console.log("SESSSSIONNN: ", session)
      }
      return session; 
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.name = user.name as string;
        token.email = user.email as string;
      }
      return token; 
    },
  },
});
