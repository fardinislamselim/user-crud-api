import express, { type Application, } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import httpStatus from 'http-status'
import router from './routes/routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notfound';
 
const app:Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT',"PATCH", 'DELETE'],
    })
)

app.use("/api/v1", router)

app.get("/", (req, res)=>{
    res.status(httpStatus.OK).json({
        success:true,
        message:"Welcome to user-crud-api"
    })
})

app.use(globalErrorHandler)
app.use(notFound)

export default app