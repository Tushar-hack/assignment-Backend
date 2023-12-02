import express from "express";
import bodyParser from "body-parser";
import {PORT} from './config/config.js';
import {connect} from './config/dbConfig.js';

import v1ApiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/v1', v1ApiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started on ${PORT}..`)
    await connect();
})