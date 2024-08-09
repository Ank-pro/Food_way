const mongoose = require('mongoose');

const DishModel = mongoose.model("dishes", {
    id: {type: Number},
    name: {type : String},
    img : {type : String},
    category : {type : String},
    price : {type : Number},
    quantity : {type : Number}
})

module.exports = DishModel;