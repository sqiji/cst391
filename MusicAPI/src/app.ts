/*
*Soran Qiji
*CST-391
*Node.js - TypeScript
*/

//Import express framework for both Request and Responce from express module
import express, { Request, Response } from 'express';

//Import Envirement Variable 
import dotenv from "dotenv";

//Importing albums and artist router
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';  
import cors from 'cors';  
import helmet from 'helmet';

//Calling Envirement Variable configration
dotenv.config({path: "../.env"}); 

//Declare and initialize insstance of express
const app = express();

//Declare and initialize port namber
const port = 3000;

//Enable all CORS request
app.use(cors());

//Adding set of security middleware
app.use(helmet());

//Parse JSON bodies
app.use(express.json());

//Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV == 'development'){
    //Add logger middleware 
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}    

//Application routes
//root
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>');
});

//Define a route 
app.use('/', [albumsRouter, artistsRouter]);

//Set the server to listen to the port (port 3000)
app.listen(port, () => {
    //Print the message to the server (the localhost)
    console.log(`Example app listening at http://localhost:${port}`)
    });


