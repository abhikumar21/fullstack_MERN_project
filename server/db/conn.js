const mongoose = require('mongoose');
const DB=process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,  //((caused no connection))
    // useFindAndModify:false
  }).then(()=> {
    console.log('connecton successfull')
  }).catch((err)=>console.log('no connection')); 