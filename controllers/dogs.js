const { Dog } = require('../models')

async function create(req, res) {
  try {
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const dogs = await Dog.findAll()
    res.status(200).json(dogs)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const dog = await Dog.update(
      req.body,
      { where: { id: req.params.dogId }, returning: true }
    )
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function deleteDog(req, res) {
  try {
    const numberOfRowsRemoved = await Dog.destroy(
      { where: { id: req.params.dogId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create, index, update, delete: deleteDog
}