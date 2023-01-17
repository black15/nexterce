import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt"
import connectDB from "../../../database/mongodb"
import User from "../../../models/User"
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    // Login with email and password
    CredentialsProvider({

    name: "Credentials",

    async authorize(credentials, req) {
      // check if email exists in db
      const result = await User.findOne({email: credentials.email})
      if(!result) {
        throw new Error('Unvalid E-mail or Password')
      }
      // check password match
      const checkpassword = await compare(credentials.password, result.password)
      if(!checkpassword) {
        throw new Error('Unvalid E-mail or Password')
      }
      // return user if email and password are valid
      return result
    }
  })
  ]
})