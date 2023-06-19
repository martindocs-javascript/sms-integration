import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

// Routes
import smsRouter from './routes/smsRoutes.js';

// Middlewares
import notRouteFoundMiddleware from './middleware/notFoundRoute.js';
import errorHandlerMiddleware from './middleware/errorHandler.js'

// It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// Handle routes
app.use('/api/v1/sms', smsRouter);

// Handle for all request that not match any current routes. 
app.use('*', notRouteFoundMiddleware);

// Handling all errors in existing routes. 
app.use(errorHandlerMiddleware); 

const port = process.env.PORT || 5000;

const start = async() => {
    try{
        app.listen(port, ()=> {
            
            console.log('Server listening on port ' + port);
        });
    }catch(e){
        console.log(err)
    }
}

start();