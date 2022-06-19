import { user } from '../user/model.js'
import { wine } from '../wine/model.js'

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

export async function createWine(req) {
  const { name, imageUrl, country, year, type, ABV, color, size, price, description } = req.body
  const newWine = await wine.create({
    name, 
    imageUrl,
    country, 
    year, 
    type, 
    ABV, 
    color, 
    size, 
    price, 
    description
  })
  return newWine
}

export async function deleteWine(ID) {
  const document = await wine.deleteOne({ _id: ID })
  return document
}

export async function editWine(req, id) {
  const { name, imageUrl, country, year, type, ABV, color, size, price, description } = req.body
  const editedWine = await wine.updateOne({ _id: id },{
    name : name, 
    imageUrl: imageUrl,
    country : country, 
    year: year, 
    type : type,   
    ABV : ABV, 
    color : color, 
    size : size, 
    price : price, 
    description : description
  })
  return editedWine
}

export async function getWines(req) {
  const wines = await wine.find({})
  return wines
}
