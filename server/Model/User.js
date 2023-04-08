import mongoose from "mongoose";
const userSchema= mongoose.Schema({
    iss:{
        type : String
    },
    ndf :{
        type : Number
    },
    aud: {
        type : String
    },
    sub: {
        type : String,
        required : true
    },
     email:{
        type : String
     },
     email_verified:{
        type : Boolean
     },
     azp:{
        type : String
     },
     name:{
        type : String
     },
     picture:{
        type :String,
        required : true
     },
     given_name:{
        type :String
     },
     family_name: {
        type: String
     },
     iat:{
        type: Number
     },
     exp:{
        type:Number
     },
     jti:{
        type:String
     }
});
const user=   mongoose.model('user',userSchema);
export default user;