const { Mongoose } = require("mongoose");
const Foods = require("../models/foods");


exports.getFoods = async (req, res, next) => {
    try {
        const foods = await Foods.find()
        if(foods){
            return res.json({status:"True",data:foods})
        }
      } catch (error) {
        console.log(error);
      }
}; 

exports.postFoods= async (req, res, next) => {
    const   name= req.body.name
     const price=req.body.price
     const imagePath=req.body.imagePath
    //   const category=req.body.category
    //  const  discount=req.body.discount
    try {
        if (!name || !price || !imagePath){
            return res.json({status:"False",message:"Fill in the required fields"})
        }
        let food = new Foods({
            name: name,
            price: price,
            imagePath: imagePath,
            // category: phone,
            // discount:
      
          });
        const posted= await food.save()
        if(posted){
            return res.json({status:"True",data:posted})
        }else{
            return res.json({status:"False",message:"There was an error saving this food, Try again"})
        }
      } catch (error) {
        console.log(error);
      }
}; 