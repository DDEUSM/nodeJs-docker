import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const server = express();
server.get("/", ( req: Request, res: Response) => {
    res.contentType('.html')
    .send("<h1>Hello World!</h1>").end();
})

server.listen(Number(process.env.PORT), process.env.HOST)



