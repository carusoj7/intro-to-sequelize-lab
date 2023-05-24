const { Dog } = require('../models')

async function create(req, res) {
  try {
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}




module.exports = {
  create,
}