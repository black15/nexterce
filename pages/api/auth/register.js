import { hash } from "bcrypt"
import connectDB from "../../../database/mongodb"
import User from "../../../models/User"

export async function handler(req, res) {
  if (req.method == 'POST') {
    const {firstName, lastName, email, password} = req.body
    if (req.body) {
      try {
        const exists = await User.findOne({email})
        if(exists) {
          return res.status(400).json({error: 'User with email already exists'})
        }
        const hashed_password = await hash(password, 12)
        const user = new User({
          firstName,
          lastName,
          email,
          password: hashed_password
        })
        const new_user = await user.save()
        return res.status(201).send(new_user)
      } catch (error) {
        return res.status(500).json({error: error.message})
      }
    }
    else {
      return res.status(500).json({error:'Data is missing'})
    }
  } else {
    return res.status(400).json({error:'HTTP method not allowed'})
  }
}

export default connectDB(handler);