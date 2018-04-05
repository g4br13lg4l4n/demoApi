const express = require('express')
const router = express.Router()

const Nodos = require('../models/Nodos')
const Users = require('../models/Users')
const Vocabulary = require('../models/Vocabulary')
const UsersAlerts = require('../models/UsersAlerts')
const AlertsGenerals = require('../models/AlertsGenerals')


/*********  NODOS  *********/
//Get Nodos
router.get('/nodos', (req, res) => {
  Nodos.find((err, nodos) => {
    if(err) {throw err}
    else{
      res.json(nodos)
    }
  })
})

//Add Nodos
router.post('/nodos', (req, res) => {
  const nodo = new Nodos(req.body)
  nodo.save()
    .then(nodo => {
      res.status(200).json({response: 'Agregado ' + nodo })
    })
    .catch(err =>{
      res.status(400).json({response: 'Error ' + err})
    })
})
//Add Delete
router.delete('/nodos/:id', (req, res, next) => {
  Nodos.findByIdAndRemove(req.params.id, (err, nodo) => {
    if(err) { res.json(err) }
    else { res.json('nodo eliminado') }
  })
})



/**************  USERS  **************/
//Get Users
router.get('/users', (req, res) => {
  Users.find((err, users) => {
    if(err) { throw err}
    else{
      res.json(users)
    }
  })
})
//Add Users 
router.post('/users', (req, res) => {
  const user = new Users(req.body)
  user.save()
    .then(user => {
      res.status(200).json({response: 'Agregado ' + user})
    })
    .catch(err => {
      res.status(400).json({response: 'Error ' + err})
    })
})
//Delete Users
router.delete('/users/:id', (req, res, next) => {
  Users.findByIdAndRemove(req.params.id, (err, nodo) => {
    if(err) { res.json(err) }
    else { res.json('nodo eliminado') }
  })
})

/******************** VOCABULARY ******************/
//Get vocabularies
router.get('/vocabulary', (req, res) => {
  Vocabulary.find((err, vocabularies) => {
    if(err) { throw err }
    else{
      res.json(vocabularies)
    }
  })
})
//Add Vocabulary
router.post('/vocabulary', (req, res) => {
  const vocabulary = new Vocabulary(req.body)
  vocabulary.save()
    .then(vocabulary => {
      res.status(200).json({response: 'Agregado' + vocabulary})
    })
    .catch(err => {
      res.status(400).json({response: 'Error' + err})
    })
})
//Delete Vocabulary
router.delete('/vocabulary/:id', (req, res, next) => {
  Vocabulary.findByIdAndRemove(req.params.id, (err, nodo) => {
    if(err) { res.json(err) }
    else { res.json('Vocabulary eliminado') }
  })
})
/**********************  USERS ALERTS  ******************/
//Get UsersAlerts
router.get('/usersAlerts', (req, res) => {
  UsersAlerts.find((err, usersAlerts) => {
    if(err) { throw err }
    else{
      res.json(usersAlerts)
    }
  })
})
//Add UsersAlerts
router.post('/usersAlerts', (req, res) => {
  const usersAlerts = new UsersAlerts(req.body)
  usersAlerts.save()
    .then(usersAlerts => {
      res.status(200).json({response: 'Agregado' + usersAlerts})
    })
    .catch(err => {
      res.status(400).json({response: 'Error' + err})
    })
})
//Delete UsersAlerts
router.delete('/usersAlerts/:id', (req, res, next) => {
  UsersAlerts.findByIdAndRemove(req.params.id, (err, nodo) => {
    if(err) { res.json(err) }
    else { res.json('UsersAlerts eliminado') }
  })
})
/**********************  ALERTSGENERALS  *******************/
//Get AlertsGenerals
router.get('/alertsGenerals', (req, res) => {
  AlertsGenerals.find((err, alertsGenerals) => {
    if(err) { throw err }
    else{
      res.json(alertsGenerals)
    }
  })
})
//Add AlertsGenerals
router.post('/alertsGenerals', (req, res) => {
  const alertsGenerals = new AlertsGenerals(req.body)
  alertsGenerals.save()
    .then(alertsGenerals => {
      res.status(200).json({response: 'Agregado' + alertsGenerals})
    })
    .catch(err => {
      res.status(400).json({response: 'Error' + err})
    })
})
//Delete AlertsGenerals
router.delete('/usersAlerts/:id', (req, res, next) => {
  AlertsGenerals.findByIdAndRemove(req.params.id, (err, nodo) => {
    if(err) { res.json(err) }
    else { res.json('AlertsGenerals eliminado') }
  })
})
module.exports = router