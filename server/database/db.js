import mongoose from "mongoose";
import  dotenv from 'dotenv';

dotenv.config();
const USERNAME =process.env.DB_USERnAME;
const PASSWORD =process.env.DB_PASSWORD;
const Connection= async()=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@whatsappweb.w8lj8wa.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true})
        console.log('Database connect successfully')
    }
    catch(error){
          console.log('Error while connecting with the database',error.message)
    }
}

export default Connection;