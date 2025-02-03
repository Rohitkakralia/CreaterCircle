import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose'
import User from '@/models/User';
import Payment from '@/models/Payment';
// import connectDb from '@db/connectDB'

export const authoptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile,email, credentials }) {
      if(account.provider === "github") {  // Use === for comparison
        try {
          await mongoose.connect("mongodb+srv://rohitkakraia94:Rohit123@cluster0.s8wtr.mongodb.net/CreaterCircle");
          
          const currentUser = await User.findOne({ email:email });  // Add await here
          
          if(!currentUser) {
            const newUser = new User({
              email: user.email,
              username: user.email.split('@')[0]
            });
            await newUser.save();  // It's save() not Save()
            user.name = newUser.username;
          } else {
            user.name = currentUser.username;
          }
          
          return true;  // Important! Need to return true to allow sign in
        } catch (error) {
          console.error("Error during sign in:", error);
          return false;  // Return false if there's an error
        }
      }
      return false;  // Return false for other providers
    }
  }
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };