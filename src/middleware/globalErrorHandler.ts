import type { ErrorRequestHandler } from "express"
import { TErrorSources } from "../interface/error"
import AppError from "./AppError"
import config from "../config"

const globalErrorHandler:ErrorRequestHandler = (err, _req, res, _next)=>{
    let statusCode = 500
    let message = "Something went wrong!"
    let errorSources:TErrorSources[] = [
        {
            path:"",
            message:"Something went wrong!"
        }
    ]
if(err instanceof AppError){
    statusCode = err?.statusCode
    message = err?.message
    errorSources = [
        {
            path:"",
            message:err.message
        }
    ]

}
else if(err instanceof Error && config.node_env === "development"){
        message = err.message
        errorSources = [
            {
                path:"",
                message:err.message
            }
        ]


    }


    res.status(statusCode).json({
        success:false,
        message,
        errorSources,
        stack: config.node_env === "development" ? err?.stack : null
    })

}




export default globalErrorHandler