const services = require('../services/notes-services.js')

module.exports = {
    createNote: (req,res)=>{
        const data = req.body
        services.createNotes(data,(err,val)=>{
            if(err){
                return res.send(err)
            }
            res.send(val)
        })
    },
    readNotes: (req,res)=>{
        services.readNotes((err,val)=>{
            if(err){
                return res.send(err)
            }
            res.send(val)
        })
    },
    readOneNote: (req,res)=>{
        console.log(req.query);
        const id = req.query.id
        services.readOneNote(id,(err,val)=>{
            if(err){
                res.send(err)
            }
            res.send(val)
        })
    },
    updateNote: (req,res)=>{
        const id = req.params.id
        const update = req.body
        services.updateNote(id,update,(err,val)=>{
            if(err){
                res.send(err)
            }
            res.send(val)
        })
    },
    deleteOneNote: (req,res)=>{
        const id = req.params.id
        services.deleteOneNote(id,(err,val)=>{
            if(err){
                res.send(err)
            }
            res.send(val)
        })
    }
    
}