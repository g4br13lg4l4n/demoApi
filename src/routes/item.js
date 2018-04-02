const express = require('express')
const router = express.Router()

const Item = require('../models/item')

router.get('/', (req, res) => {
  Item.find((err, items) => {
    if(err) { throw err }
    else {
      res.json(items)
    }
  })
})

router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    res.json(item)
  })
})

router.post('/', (req, res) => {
  const item = new Item(req.body)
  item.save()
    .then(item => {
      res.status(200).json({item: 'Item agregado'})
    })
    .catch(err => {
      res.status(400).json({item: 'error al agregar item'})
    })
})

router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if(!item) {
      return next(new Error('No se pudo cargar el documento'))
    } else {
      item.name = req.body.name
      item.price = req.body.price
      item.save()
        .then(item => res.json('Actualización completa'))
        .catch(err => res.status(400).send('No se pudo actualizar'))
    }
  })
})

router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    if(err) { res.json(err) }
    else { res.json('Item eliminado') }
  })
})

module.exports = router