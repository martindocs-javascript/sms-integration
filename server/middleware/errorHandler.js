import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next)=> {    
   
    // Default response    
    const defaultErrorResponse = {
        StatusCodes: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, please try again later',
    } 

    // Handle missing fields in the database
    if(err.name === 'ValidationError'){
        defaultErrorResponse.StatusCodes = StatusCodes.BAD_REQUEST;
        defaultErrorResponse.msg = Object.values(err.errors).map((err) =>{
            const propName = err.path.toUpperCase();
            const propMsg = err.message.split(') ')[1];

            return `${propName} ${propMsg}`;
        }).join(' ');        
    }

    res.status(defaultErrorResponse.StatusCodes).json({msg: defaultErrorResponse.msg});
   
}

export default errorHandlerMiddleware;