const express=require('express')
const router=new express.Router()
const notesController=require('../controller/notes.controller')
const path=require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../../../frontend/", 'index.html'))
})
router.post('/addNotes',notesController.addNotes)
router.get('/readNotes',notesController.readNotes)
router.delete('/deleteNote/:id',notesController.deleteNote)
router.patch('/updateNote/:id',notesController.updateNote)
router.get('/readNote/:id',notesController.readNote)
router.patch('/updateNotesss/:id/:data',notesController.updateNotes)

module.exports= router