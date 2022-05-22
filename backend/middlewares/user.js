import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export function userAuthentication(req, res, next) {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.SECRET_USER, (error, decodedToken) => {
      if (error) res.redirect('/login')
      next()
    })
  } else {
    res.redirect('/login')
  }
}
