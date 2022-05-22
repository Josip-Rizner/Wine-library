import { createCookie } from '../helpers/cookies.js'
import { createUser, loginUser } from '../database/functions.js'
import { userNotCreatedError } from '../helpers/errors.js'

export function signupGet(req, res) {
  res.send('Welcome to the sign up page!')
}

export async function signupPost(req, res) {
  try {
    const newUser = await createUser(req)
    createCookie(res, newUser._id)
    res
      .status(201)
      .json({ message: `New user is created is with id: ${newUser._id}.` })
  } catch (error) {
    const errors = userNotCreatedError(error)
    res.status(400).json({ message: errors })
  }
}

export function loginGet(req, res) {
  res.send('Welcome to the login page!')
}

export async function loginPost(req, res) {
  try {
    const currentUser = await loginUser(req)
    createCookie(res, currentUser._id)
    res.status(201).json({ message: `User logged in with id: ${currentUser._id}.` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export function logoutGet(req, res) {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
}
