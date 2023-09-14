<<<<<<< HEAD
const express = require('express')
const router = new express.Router()
const controller = require('../controller/notes-controller.js')
const Note = require('../../model/notes.js')

router.post('/notes',controller.createNote)
router.get('/notes',controller.readNotes)
router.get('/note',controller.readOneNote)
router.patch('/notes/:id',controller.updateNote)
router.delete('/notes/:id',controller.deleteOneNote)

module.exports = router
=======
const express=require('express')
const router=new express.Router()
const notesController=require('../controller/notes.controller')

router.post('/addNotes',notesController.addNotes)
router.get('/readNotes',notesController.readNotes)
router.delete('/deleteNote/:id',notesController.deleteNote)
router.patch('/updateNote/:id',notesController.updateNote)
router.get('/readNote/:id',notesController.readNote)
router.patch('/updateNotesss/:id/:data',notesController.updateNotes)

module.exports= router
>>>>>>> e436cc5e257837cc92a543b1f92b1d9260ab89f0
