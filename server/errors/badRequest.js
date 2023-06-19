import { StatusCodes } from 'http-status-codes';
import CustomAPIErrors from './customAPIErrors.js';

class BadRequestError extends CustomAPIErrors {
    constructor(message){
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

export default BadRequestError;