import { user } from '../user/model.js'

export async function loginUser(req) {
  const { email, password } = req.body
  const currentUser = await user.login(email, password)
  return currentUser
}

export async function createUser(req) {
  const { firstName, lastName, email, password } = req.body
  const newUser = await user.create({
    firstName,
    lastName,
    email,
    password
  })
  return newUser
}
