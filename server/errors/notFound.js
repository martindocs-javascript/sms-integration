import { StatusCodes } from 'http-status-codes';
import CustomAPIErrors from './customAPIErrors.js';

class NotFoundError extends CustomAPIErrors {
    constructor(message){
        super(message);
        this.StatusCodes = StatusCodes.NOT_FOUND;
    }
}

export default NotFoundError;