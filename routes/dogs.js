const router = require('express').Router()

dogsCtrl = require('../controllers/dogs.js')

//ALL ROUTES IN THIS FILE WILL BE ON
// http://localhost:30001/api/cats

// POST http://localhost:3001/api/cats
router.post('/', dogsCtrl.create)

// GET http://localhost:3001/api/dogs
router.get('/', dogsCtrl.index)

// PUT http://localhost:3001/api/dogs
router.put('/:dogId', dogsCtrl.update)

// DELETE http//localhost:3001/api/cats
router.delete('/:dogId', dogsCtrl.delete)


module.exports = router