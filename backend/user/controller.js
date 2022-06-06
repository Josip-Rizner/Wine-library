import { createCookie } from '../helpers/cookies.js'
import { createUser, loginUser } from '../database/functions.js'
import { userNotCreatedError } from '../helpers/errors.js'


export function indexGet(req, res) {
  res.render("homePage/index");
}

export function signupGet(req, res) {
    res.render("Register/signup");
}

export async function signupPost(req, res) {
  try {
    const newUser = await createUser(req)
    createCookie(res, newUser._id)
    res
      .status(201)
      //.json({ message: `New user is created is with id: ${newUser._id}.` })
      //.render("mainPage/index")
      .redirect("/wine")
  } catch (error) {
    const errors = userNotCreatedError(error)
    res.status(400)
      //.json({ message: errors })
      .redirect("/login")
  }
}

export function loginGet(req, res) {
  res.render("Login/login");
}

export async function loginPost(req, res) {
  try {
    const currentUser = await loginUser(req)
    createCookie(res, currentUser._id)
    res
      .status(201)
      //.json({ message: `User logged in with id: ${currentUser._id}.` })
      //.render("mainPage/index")
      .redirect("/wine")
  } catch (error) {
    res.status(400)
    //.json({ message: error.message })
    .redirect("/login")
  }
}

export function logoutGet(req, res) {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
}
