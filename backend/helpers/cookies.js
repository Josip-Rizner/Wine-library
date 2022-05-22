import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'

dotenv.config()

export function createCookie(res, id) {
  const token = jwt.sign({ id }, process.env.SECRET_USER, { expiresIn: 3600 })
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 3600000
  })
}

export function findUserID(req) {
  if (req.headers.cookie == undefined) return null
  return jwtDecode(req.headers.cookie)['id']
}
