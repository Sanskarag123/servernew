const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const User=require('./models/user')
const userp=require('./models/userp')
const db='mongodb+srv://san:1234@cluster0-nmxs5.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(db,{ useNewUrlParser: true },err=>{
    if(err)
    console.log('cannot connect')
    else
    {
        console.log('connected')
    }
}
);

router.get('/',(req,res)=>
{
    res.send('connected bro')
});
router.post('/login',(req,res)=>
{
    const userdata=req.body
    userp.findOne({name:userdata.name},(error,data)=>
    {
        if(error)
        res.status(401).send("ni mila")
        else
        {
            res.status(200).send(data)
        }

    })

})
router.post('/contri',(req,res)=>
{
    const data=req.body
    const user=new User(data)
    user.save((error,codep)=>{
        if(error)
        res.status(401).send('error  ha ab dk le')
        else{
        res.status(200).send(codep)
        console.log('enterd bro')}

    })

})
router.post('/code',(req,res)=>{
    const userdata=req.body
    User.findOne({ques:userdata.ques},(error,data)=>
    {
        if(error)
        res.status(401).send("ni mila")
        else
        {
            res.status(200).send(data)
        }

    })
})

module.exports=router