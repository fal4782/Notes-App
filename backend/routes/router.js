const express = require('express')
const router = new express.Router()
const Note = require('../model/notes.js')

//POST /notes
router.post('/notes',(req,res)=>{
    const note = new Note(req.body)
    note.save().then(()=>{
        return res.send(note)
    }).catch((e)=>{
        return res.status(500).send("error: ",e)
    })
})

//GET /notes
router.get('/notes',(req,res)=>{
    Note.find({}).then((notes)=>{
        return res.send(notes)
    }).catch((e)=>{
        res.status(500).send("Error: ",e)
    })
})

//GET /notes/:id
router.get('/notes/:id',(res,req)=>{
    Note.findById(req.params.id).then((note)=>{
        if(!note){
            return res.status(404).send("Note not found")
        }
        res.send(note)
    }).catch((e)=>{
        res.status(500).send("error: ",e)
    })
})

module.exports = router