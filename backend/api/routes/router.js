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