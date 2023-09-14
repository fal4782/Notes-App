const mongoose=require('mongoose')
const notes=mongoose.model('notes',{
    description:{
        type:String,
        required:true
    }
})

module.exports=notes