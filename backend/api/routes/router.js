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