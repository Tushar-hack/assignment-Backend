import express from "express";
const router = express.Router();

import {createUser, getAllUser, getAUser, updateUser, deleteUser} from '../controller/user-controller.js';

router.get('/users', getAllUser);
router.get('/users/:id', getAUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;