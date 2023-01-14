import {Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

const User = models.user || model('user', UserSchema)

export default User