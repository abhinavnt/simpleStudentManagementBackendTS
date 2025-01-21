import express from 'express';
import connectDB from "./config/connectDb";
import dotenv from 'dotenv';
import routes from './routes/routes'

dotenv.config()


const app= express()


app.use(express.json())


connectDB()

//for routes
app.use(routes)

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
  

app.listen(process.env.PORT,()=>{
    console.log('server is running');
    
})