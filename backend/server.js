import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRouter.js'

//App config



const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())


//API endpoints
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
     res.send("API working")
})


app.listen(port,()=>console.log('server started on port: '+ port))
