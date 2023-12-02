import UserService from "../service/user-service.js";

const userService = new UserService();

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUserService(req.body);
        return res.status(201).json({
            data:user,
            message: 'Successfully created the user',
            success: true
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}


export const getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUserService();
        return res.status(200).json({
            data: users
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}


export const getAUser = async (req,res) => {
    try {
        const user = await userService.getUserService(req.params.id);
        return res.status(200).json({
            data: user,
            message: 'Successfully fetched the user',
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
} 


export const deleteUser = async (req,res) => {
    try {
        const response = await userService.deleteUserService(req.params.id);
        return res.status(200).json({
            success: true
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}


export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUserService(req.params.id, req.body);
        return res.status(200).json({
            data: updatedUser,
            message: 'Successfully updated the user',
            success: true
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}
