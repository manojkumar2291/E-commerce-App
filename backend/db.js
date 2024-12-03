const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://podapatimanoj22:manoj@cluster0.7yyne.mongodb.net/commerce?retryWrites=true&w=majority&appName=Cluster0')
//schema for creating products
const productschema=mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})
const Userschema=mongoose.Schema({
    username:{
        tpye:String,
    },
    email:{
    type:String,
    
    unique:true
    },
    password:{
        type:String,
        
    },
    cartData: {
        type: Map,
        of: Number,
        default: new Map(
          Array.from({ length: 300 }, (_, i) => [i.toString(), 0])
        ),},
    date:{
        type:Date,
        default:Date.now
    }
})

const product=mongoose.model('product',productschema);
const user=mongoose.model('user',Userschema);
module.exports={product,user};