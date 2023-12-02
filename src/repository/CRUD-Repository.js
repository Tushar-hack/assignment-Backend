import {AppError, CastError, ValidationError} from '../utils/error/index.js';
import {StatusCodes} from 'http-status-codes';

class CRUDRepository {
    constructor (model) {
        this.model = model;
    }


    async create (data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            if(error.name == "ValidationError"){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create a User',
                'There was some issue creating a User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Cannot get Users',
                'There was some issue while fetching all the Users, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async delete(id) {
        try {
            const user = await this.model.findByIdAndDelete(id);
            return user;
        } catch (error) {
            if(error.name == "CastError"){
                throw new CastError(error);
            }

            throw new AppError(
                'RepositoryError',
                'Cannot delete a User',
                'There was some issue while deleting the User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {new:true});
            return response;
        } catch (error) {
            if(error.name == "CastError"){
                throw new CastError(error);
            }

            throw new AppError(
                'RepositoryError',
                'Cannot Update the User',
                'There was some issue while Updating the User, Please try again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            if(error.name == "CastError"){
                throw new CastError(error);
            }

            throw new AppError(
                'RepositoryError',
                'Cannot get a User',
                'There was some issue while fetching a User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

export default CRUDRepository;