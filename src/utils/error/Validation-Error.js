import {StatusCodes} from 'http-status-codes';

class ValidationError extends Error{
    constructor(err){
        super();
        var explanation
        if(err.errors.name){
            explanation = err.errors.name.message;
        }else if (err.errors.email) {
            explanation = err.errors.email.message;
        }else {
            explanation = err.errors.password.message;
        }

        this.name = err.name,
        this.message = err._message,
        this.explanation = explanation,
        this.statusCode = StatusCodes.BAD_REQUEST
    } 
}

export default ValidationError;