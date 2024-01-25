/*
*Soran Qiji
*CST-391
*Node.js - TypeScript
*/

//Import express framework for both Request and Responce from express module
import express, { Request, Response } from 'express';

//Declare and initialize insstance of express
const app = express();

//Declare and initialize port namber
const port = 3000;

//Define a route to the root path using get() mrthod  
app.get('/', (req: Request, res: Response) => {

//Respond with string using send() method
res.send('Hello World from TypeScript!');

});

//Set the server to listen to the port (port 3000)
app.listen(port, () => {
    //Print the message to the server (the localhost)
    console.log(`Example app listening at http://localhost:${port}`)
    });
