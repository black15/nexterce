import { compare } from "bcrypt"
import connectDB from "../../../database/mongodb"
import User from "../../../models/User"

export async function handler(req, res) {
  if (req.method == 'POST') {
    const {email, password} = req.body
    if (req.body) {
      try {
        const exists = await User.findOne({email})
        if(!exists) {
          return res.json({message: 'Unvalid E-mail or Password'})
        }
        compare(password, exists.password, function(err, ok){
          if (ok) {
            return res.json({message: 'GG'})
          }
          else {
            return res.json({message: 'Unvalid E-mail or Password'})
          }
        })
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
    else {
      return res.status(500).send('Data is missing')
    }
  } else {
    return res.status(400).send('HTTP method not allowed')
  }
}

export default connectDB(handler);