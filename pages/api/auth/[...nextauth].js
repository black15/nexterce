import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const {username, password} = credentials
        const res = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({username, password})
        });
        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        else return null
      }
    })
  ]
});
