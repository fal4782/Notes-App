const express = require('express')
const router = new express.Router()
const Note = require('../model/notes.js')

//POST /notes
// router.post('/notes',(req,res)=>{
//     const note = new Note(req.body)
//     note.save().then(()=>{
//         res.send("CREATED")
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })

//GET /notes
// router.get('/notes',(req,res)=>{
//     Note.find({}).then((notes)=>{
//         return res.send(notes)
//     }).catch((e)=>{
//         res.status(500).send("Error: ",e)
//     })
// })

//GET /notes/:id
router.get('/notes/:id',(req,res)=>{
    console.log(req.params.id);
    Note.findById(req.params.id).then((note)=>{
        if(!note){
            return res.status(404).send("Note not found")
        }
        res.send(note)
    }).catch((e)=>{
        res.send("error: ",e)
    })
})

//PATCH /note/:id
// router.patch('/notes/:id',(req,res)=>{
//     Note.findByIdAndUpdate(req.params.id, req.body).then((note)=>{
//         if (!note){

//         }
//     })
// })

module.exports = router