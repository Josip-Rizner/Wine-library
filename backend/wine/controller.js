import { createWine, editWine, getWines, deleteWine } from '../database/functions.js'

export async function createWinePost(req, res) {
  try {
    const newWine = await createWine(req)
    res
      .status(201)
      //.json({ message: `New wine is added is with id: ${newWine._id}.` })
      .redirect('/wine')
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export async function editWinePost(req, res) {
  try {
    const { id } = req.params
    const editedWine = await editWine(req, id)
    res.status(201).json({ message: editedWine })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export async function winesGet(req, res) {
  try {
    const wines = await getWines(req)

    res.status(201).render('mainPage/index')
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export async function winesGetAll(req, res) {
  try {
    const wines = await getWines(req)

    res.status(201).json({ message: wines })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

export async function wineDelete(req, res) {
  try {
    const wine = await deleteWine(req.params.wineID)
    res.status(201).json({ message: 'Wine deleted' })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
