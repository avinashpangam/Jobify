import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import 'express-async-errors'
// import cors from 'cors'


dotenv.config()
const app=express()
import connectDB from './db/connect.js'

import authRouter from './routes/authRoutes.js'

import jobRouter from './routes/jobsRoutes.js'
 
import notFoundMiddleware from './middleware/notfound.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

if(process.env.NODE_ENV!=='production'){
    app.use(morgan('dev'));
}
app.use(express.json())
// app.use(cors())


app.get('/api/v1',(req,res)=>{
    // throw new Error('')
    res.json({msg:'API'})
})

app.get('/',(req,res)=>{
    // throw new Error('')
    res.json({msg:'welcome'})
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',authenticateUser,jobRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port=process.env.PORT || 5000



const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is running on ${port}`)
        })
    } catch (error) {
       console.log('error')   
    }
}

start()














