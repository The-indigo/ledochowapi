const express= require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require ('dotenv').config()

const app= express();

const foodRoutes=require('./routes/food.js')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(foodRoutes)

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((result) => {
    console.log("Database connected");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));