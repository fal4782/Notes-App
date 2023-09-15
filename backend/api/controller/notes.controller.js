const notes=require('../services/notes.services')
module.exports={
    addNotes:(req,res)=>{
       const data=req.body
       console.log(data)
        notes.addNotesService(data,(err,result)=>{
            if(err){
                return res.status(400).json({
                    err
                })
            }
            res.send(result)
        })
        
    },
    readNotes:async(req,res)=>{
        notes.readNotesServices((err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result)
        })
    },
    deleteNote:(req,res)=>{
        const id=req.params.id
        //console.log(id)
        notes.deleteNoteServices(id,(err,result)=>{
            if(err){
                return res.send(400).send(err)
            }
            res.send(result)
        })
    },
    updateNote:(req,res)=>{
        const id=req.params.id
        const data=req.body
        console.log(data)
        notes.updateNoteServices(id,data,(err,result)=>{
            if(err){
                return res.send(400).send(err)
            }
            res.send(result)
        })
    },
    readNote:async(req,res)=>{
        const id=req.params.id
        notes.readNoteServices(id,(err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result)
        })
    },
    updateNotes:(req,res)=>{
        console.log('fvb')
        const id=req.params.id
        const data=req.params.data
        console.log(id,data)
        notes.updateNoteServices(id,data,(err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result)
        })
    },
}