import { createWine, editWine } from '../database/functions.js'

export async function createWinePost(req, res) {
  try {
    const newWine = await createWine(req)
    res
      .status(201)
      .json({ message: `New wine is added is with id: ${newWine._id}.` })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export async function editWinePost(req, res) {
    try {
      const {id} = req.params
      const editedWine = await editWine(req, id)
      res
        .status(201)
        .json({ message: editedWine })
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }