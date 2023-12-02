import { StatusCodes } from 'http-status-codes';

class CastError extends Error{
    constructor (error) {
        super();
        this.name = error.name, 
        this.message = "Invalid ID",
        this.explanation =  "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer",
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export default CastError;