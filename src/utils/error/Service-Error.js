class ServiceError extends Error {
    constructor (err) {
        super();
        this.name = err.name,
        this.message = err.message,
        this.explanation = err.explanation,
        this.statusCode = err.statusCode
    }
}

export default ServiceError;