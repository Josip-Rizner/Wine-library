import { createWine, editWine, getWines} from '../database/functions.js'

export async function createWinePost(req, res) {
  try {
    const newWine = await createWine(req)
    res
      .status(201)
      //.json({ message: `New wine is added is with id: ${newWine._id}.` })
      .redirect("/wine")
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

  export async function winesGet(req, res) {
    try {
      const wines = await getWines(req)

      res.status(201)
        //.json({ message: wines })
        .render("mainPage/index")
      
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }