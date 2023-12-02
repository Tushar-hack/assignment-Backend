import  mongoose  from "mongoose";
import {URL} from './config.js';

export const connect = async () => {
    await mongoose.connect(URL);
    console.log('Connection Successfull....');
}