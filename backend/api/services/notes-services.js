const Note = require('../../model/notes.js')

module.exports = {
    createNotes: (data,callback) => {
        const note = new Note(data)
        note.save().then(()=>{
            callback(null,"Note created successfully!")
        }).catch((e)=>{
            callback(e,null)
        })
    },
    readNotes: (callback)=>{
        Note.find().then((notes)=>{
            callback(null,notes)
        }).catch((e)=>{
            callback(e)
        })
    },
    readOneNote: (id,callback)=>{
        Note.findById(id).then((note)=>{
            if(!note){
                callback(null,"No matching note found")
            }
            callback(null,note)
        }).catch((e)=>{
            callback(e,null)
        })
    },
    updateNote: (id, update, callback)=>{
        Note.findByIdAndUpdate(id,update,{new:true}).then((note)=>{
            if(!note){
                callback(null,"No such note exists")
            }
            callback(null, note)
        }).catch((e)=>{
            callback(e, null)
        })
    },
    deleteOneNote: (id, callback)=>{
        Note.findByIdAndDelete(id).then((note)=>{
            if(!note){
                callback(null, "No such note found")
            }
            callback(null,note+"This was deleted")
        }).catch((e)=>{
            callback(e, null)
        })
    }
}