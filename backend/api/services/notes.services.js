const notes=require('../../model/notes')
module.exports={
    addNotesService:(data,callback)=>{
        const note=new notes(data)
        console.log(data)
        note.save().then(()=>{
            callback(null,'note added successfully')
        }).catch((e)=>{
            callback(e)
        }) 
    },
    readNotesServices:(callback)=>{
        notes.find().then((n)=>{
            callback(null,n)
        }).catch((e)=>{
            callback(e)
        })

    },
    deleteNoteServices:(id,callback)=>{
        //console.log(id)
        notes.findByIdAndDelete(id).then(()=>{
            callback(null,'Deleted successfully')
        }).catch((e)=>{
            callback(e)
        })
    },
    updateNoteServices:(id,data,callback)=>{
        notes.findByIdAndUpdate(id,data).then(()=>{
            callback(null,'Updated successfully')
            
        }).catch((e)=>{
            callback(e)
        })
    },
    readNoteServices:(id,callback)=>{
        notes.findById(id).then((n)=>{
            callback(null,n)
        }).catch((e)=>{
            callback(e)
        })

    },
    updateNotesServices:(id,data,callback)=>{
        notes.findByIdAndUpdate(id,data).then(()=>{
            callback(null,'Updated successfully')
            
        }).catch((e)=>{
            callback(e)
        })
    }
}