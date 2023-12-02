import UserRepository from '../repository/user-repo.js';
import {ServiceError, AppError} from '../utils/error/index.js';
import {StatusCodes} from 'http-status-codes';


class UserService {
    constructor () {
        this.UserRepository = new UserRepository();
    }

    async createUserService (data)  {
        try {
            const response = await this.UserRepository.create(data);
            return response;
        } catch (error) {
            if(error.name == 'ValidationError' || error.name == 'RepositoryError'){
                throw new ServiceError(error);
            }
            throw new AppError(
                'ServiceError',
                'Cannot create User',
                'There was some issue creating a User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getAllUserService() {
        try {
            const response = await this.UserRepository.getAll();
            return response;
        } catch (error) {
            if(error.name == 'RepositoryError'){
                throw new ServiceError(error);
            }
            throw new AppError(
                'ServiceError',
                'Cannot get all User',
                'There was some issue while fetching all the User, Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async deleteUserService(id) {
        try {
            const response = await this.UserRepository.delete(id);
            if(Object.is(response, null)){
                throw new AppError(
                    "NotFoundError",
                    "User NOT Found.",
                    "No User Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return response;
        } catch (error) {
            if(error.name == 'CastError' || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new AppError(
                'ServiceError',
                'Cannot delete a User',
                'There was some issue while deleting a User, PLease try again!!',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async updateUserService(id ,data) {
        try {
            if(JSON.stringify(data) === '{}'){
                throw new AppError(
                    "NoContentFound",
                    "Content NOT Found",
                    "No Content Found to update",
                    StatusCodes.NOT_FOUND
                )
            }
            const response = await this.UserRepository.update(id, data);
            if(Object.is(response, null)) {
                throw new AppError(
                    "NotFoundError",
                    "User NOT Found.",
                    "No User Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return response;
        } catch (error) {
            if(error.name == 'CastError' || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError" || error.name == "NoContentFound"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new ServiceError(
                'ServiceError',
                'Cannot Update a User',
                'There was some issue while Updating the USer, Please try again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getUserService(id) {
        try {
            const response = await this.UserRepository.get(id);
            if(Object.is(response, null)) {
                throw new AppError(
                    "NotFoundError",
                    "User NOT Found.",
                    "No User Found with this ID.",
                    StatusCodes.NOT_FOUND
                )
            }
            return response;
        } catch (error) {
            console.log(error);
            if(error.name == "CastError" || error.name == 'RepositoryError'){
                throw new ServiceError(error); 
            }
            if(error.name == "NotFoundError"){
                throw new AppError(
                    error.name,
                    error.message,
                    error.explanation,
                    error.statusCode
                );
            }
            throw new AppError(
                'ServiceError',
                'Cannot get a User',
                'There was some issue while fetching the User, PLease try again!!',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

export default UserService;