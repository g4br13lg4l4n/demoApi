const express = require('express')
const router = express.Router()

const Item = require('../models/item')
const userAlert = require('../models/userAlert')
const Nodo = require('../models/nodo')
const Theme = require('../models/theme')

//Get Users
router.get('/user',(req, res) => {
  userAlert.find((err, userAlerts) => {
    if(err) {throw err}
    else {
      res.json(userAlerts)
    }
  })
})

// Add User
router.post('/user', (req, res) => {
  const user = new userAlert(req.body)
  user.save()
    .then(item => {
      res.status(200).json({user: 'Item agregado'})
    })
    .catch(err => {
      res.status(400).json({user: 'error al agregar item'})
    })
})

// Add Nodo
router.post('/nodo', (req, res) => {
  const nodo = new Nodo(req.body)
  nodo.save()
    .then(item => {
      res.status(200).json({nodo: 'Item agregado'})
    })
    .catch(err => {
      res.status(400).json({nodo: 'error al agregar item'})
    })
})

// Get nodo
router.get('/nodo',(req, res) => {
  Nodo.find((err, nodos) => {
    if(err) {throw err}
    else {
      res.json(nodos)
    }
  })
})

// add Theme of alert
router.post('/theme', (req, res) => {
  const theme = new Theme(req.body)
  theme.save()
    .then(item => {
      res.status(200).json({theme: 'Item agregado'})
    })
    .catch(err => {
      res.status(400).json({theme: 'error al agregar item'})
    })
})

//get theme of alert
router.get('/themes', (req, res) => {
  Theme.find((err, themes) => {
    if(err) {throw err}
    else {
      res.json(themes)
    }
  })
})
/*
router.get("/themesNodo", (req, res) => {
	Theme.find({}, (err, themes) => {
    	Nodo.populate(themes, {path: "nodo"},(err, themes) => { 
        if(err) {throw err}
        else {
          res.status(200).send(themes)
        }
        });
    })
})
*/

router.get("/themesNodo", (req, res) => {
	Theme.find({})
    .populate('nodo')
    .populate('user')
    .exec((err, themes) =>{
      if (err) return handleError(err)
      res.status(200).send(themes)
    })
})

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