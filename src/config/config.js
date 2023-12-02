import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;
export{
    PORT,
    URL
}