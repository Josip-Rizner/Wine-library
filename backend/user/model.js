import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const { Schema } = mongoose

let validateEmail = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

let validatePassword = password => {
  return /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,123456789]{2,25}$/.test(password)
}

const userSchema = new Schema(
  {
    firstName: {
      required: [true, 'First name is required!'],
      type: String,
      trim: true
    },
    lastName: {
      required: [true, 'Last name is required!'],
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required!'],
      validate: [validateEmail, 'Email is invalid']
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      validate: [validatePassword, 'Password is invalid']
    }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const userAuthetication = await bcrypt.compare(password, user.password)
    if (userAuthetication) return user
  }
  throw new Error('Incorrect email and/or password!')
}

export const user = mongoose.model('User', userSchema)
