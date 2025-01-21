import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()



const connectDB=async ()=>{
    try {
        const dbURI  = process.env.dburi || 'mongodb://localhost:27017/studentDB'
        await mongoose.connect(dbURI)
        console.log('db is connected');
        
    } catch (error) {
        console.log('db connection failed');
        
    }
}


export default connectDB;