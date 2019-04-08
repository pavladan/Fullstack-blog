const express = require('express');
const path= require('path');
const mongoose =require('mongoose');
const bodyParser = require ('body-parser');
const postRouter = require('./routes/post')
const keys = require('./keys')

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname,'client')
const app = express();
app.use(bodyParser.json());
app.use('/api/post',postRouter)
mongoose.connect(keys.mongoURI)
  .then(()=>console.log('MongoDB connect'))
  .catch(err=>console.error(err));
app.use(express.static(clientPath))
app.listen(port,()=>{
  console.log(`Server has been started on port ${port}`);
})
