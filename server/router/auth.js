const { request } = require('express');
const express=require('express');
const router=express.Router();

require('../db/conn.js');
const User=require("../model/userSchema");


router.get('/', (req, res)=> {
    res.send('hello from router');
});


// promises    /////////////////////////////////////////////////////////////////////////////////////
// router.post('/register', (req, res) => {

//     const { name, email, phone, password } = req.body; 
//     var array= [ name, email, phone, password, cpassword ] ;
//     var arraystr=[5];
//    arraystr= ["your name", "email", "phone no", "password", "cpassword"];
        
//      //  if(!name || !email || !phone || !password || !cpassword) {
//      //     return res.json({error:"fill all the details"});
//      //  }
//       for(i=0;i<5;i++) {
//          if(!array[i]) {
//          // return res.json({error:`fill ${arraystr[i]}`});
//          return res.status(422).json({error:`fill ${arraystr[i]}`});
//          }
//       } 
 
//      // console.log(name);
//      // res.json({message:req.body});
 
//      User.findOne({email:email}).then((userExist)=> {
//          if(userExist) {
//              return res.status(422).json({error: "Email already exist"})
//          }
 
//         const user= new User({name, email, phone, password});
//         user.save().then(()=> {
//          res.status(202).json({message: "user registered succesfully"});
//         }).catch((err)=> res.status(500).json({error: "failed to register"}));
 
//      }).catch(err => {console.log(err); });  
//  });
/////////////////////////////////////////////////////////////////////////////////////

router.post('/register', async(req, res) => {

   const { name, email, phone, password, cpassword } = req.body; 
   var array= [ name, email, phone, password, cpassword] ;
   var arraystr=[5];
  arraystr= ["your name", "email", "phone no", "password", "cpassword"];
       
     for(i=0;i<5;i++) {
        if(!array[i]) {
        return res.status(422).json({error:`fill ${arraystr[i]}`});
        }
     } 

     try {
        const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(422).json({error: "Email already exist"})
        }
        const user= new User({name, email, phone, password, cpassword});

        const userRegister= await user.save();
        if(userRegister) {
            res.status(201).json({message: "user registered succesfully"});
        }
        else{
            res.status(500).json({error: "failed to register"});
        }

      
     } catch (err) {
        console.log(err)
     }

});


router.post('/login', async(req, res)=> {
   


  try {
    const { email, password } = req.body; 
    if(!email || !password) {
        return res.status(400).json({error: "please fill the data"});
    }
    const userLogin = await User.findOne({email:email});
      if(!userLogin) {
          res.json({error:"no previous data found"})
        }
        else{
        
        if(password==userLogin.password) {
          res.json({message:"user login successful"});
         }
         else{
             res.json({error:"invalid credintials"});
         }  
      }

   



  } catch (error) {
    console.log(error);
  }
    
   
})







module.exports = router;