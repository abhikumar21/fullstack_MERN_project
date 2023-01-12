

const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

dotenv.config({ path:'./config.env'});
require('./db/conn.js');
const User=require('./model/userSchema');

app.use(express.json());
//linking the router files
app.use(require('./router/auth'));


const PORT= process.env.PORT;





//
// const middleware = function (req, res, next) {
//   console.log('LOGGED');
// }


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
//   next();
// });
// app.get('/about',  (req, res) => {
//     res.send('This is about')
//   });

  app.get('/contact', (req, res) => {
    res.send('This is contact')
  });

  // app.get('/login', (req, res) => {
  //   res.send('This is login page')
  // });

  // app.get('/sign_up', (req, res) => {
  //   res.send('Sign up now')
  // });




app.listen(PORT, ()=> {
    console.log(`server is at port ${PORT}`);
})
