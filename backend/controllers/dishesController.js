const DishModel = require("../models/Dishes");

const getDishes = async (req, res) => {
    const myDishes = await DishModel.find({});
    console.log(myDishes);
    return res.send(myDishes);
}

module.exports = (getDishes);