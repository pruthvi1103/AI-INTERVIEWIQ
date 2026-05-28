import mogoose from 'mongoose';
const userSchema = new mogoose.Schema({
    name:{
        type: String,
        required: true,

    },
    email:{
         type:String,
         required: true,
         unique:true,
         lowercase:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    age:{
        type:Number,
        min:14,
        max:70,
    },
    phone:{
        type:String,
    },
})
 export const User = mogoose.model("User",userSchema)