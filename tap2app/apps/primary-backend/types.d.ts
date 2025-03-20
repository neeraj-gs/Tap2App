//declaration file

declare namespace Express {
    interface Request {
        userId?:string; //makes sure Request object can be overwrittedn and has a userId field as well 
    }
}