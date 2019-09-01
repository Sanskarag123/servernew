const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    code:String,
    ques:String,

}
)
module.exports=mongoose.model('user',userSchema,'user1')

