const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"PLEASE ENTER PRODUCT'S NAME"],
        trim:true,
        maxlength:[30,"PRODUCT NAME CANNOT EXCEED THAN 4000 CHARACTERS"]
    },
    description:{
        type:String,
        required:[true,"PLEASE ENTER PRODUCT'S DESCRIPTION"],
        maxlength:[4000,"DESCRIPTION CANNOT EXCEED THAN 4000 CHARACTERS"]
    },
    price:{
        type:Number,
        required:[true,"PLEASE ADD PRICE FOR PRODUCT"],
        maxlength:[8,"PRICE CANNOT EXCEED 8 CHARACTERS"],
    },
    discountPrice:{
        type:String,
        maxlength:[4,"DISCOUNT PRICE CANNOT EXCEED 4 CHARACTERS"],
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    ratings:{
        type: Number,
        default: 0,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    category:{
        type: String,
        required:[true,"Please add a category of your product"],
    },
    Stock:{
        type: Number,
        required:[true,"Please add some stoke for your product"],
        maxLength: [3, "Stock can not exceed than 3 characters"],
    },
  numOfReviews:{
      type: Number,
      default: 0
  },
  reviews:[
      {
          user: {
              type:mongoose.Schema.ObjectId,
              ref:"User",
              required: true,
          },
          name:{
              type: String,
              required: true,
          },
          rating:{
              type: Number,
              required: true,
          },
          comment:{
              type:String,
          },
          time:{
              type: Date,
              default: Date.now()
          },
      },
  ],
  user:{
      type: mongoose.Schema.ObjectId,
      ref:"User",
      required: true
  },
  createAt:{
      type:Date,
      default: Date.now()
  }
})
module.exports = mongoose.model("Product",productSchema);