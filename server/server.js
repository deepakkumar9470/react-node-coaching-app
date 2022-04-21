import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB  from './config/db.js'
const PORT = process.env.PORT || 8000

import coachingRoute from './routes/coaching.js'
import courseRoute from './routes/course.js'
import dbConnection from './db/db.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))


dbConnection()



app.use('/api/coaching', coachingRoute)
app.use('/api/course', courseRoute)


connectDB()



app.get('/', (req,res)=>{
    res.send('Success..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})

