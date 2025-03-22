import type {Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export function authMiddleware(req:Request, res:Response, next:NextFunction){
    const authHeader = req.headers.authorization; //Bearer token - sent from frontend 
    const token = authHeader?.split(" ")[1];
    if(!token){
        res.status(401).json({message:"Unauthorized"})
        return;
    }

    const decoded = jwt.verify(token,process.env.JWT_PUBLIC_KEY!,{
        algorithms:["RS256"],
    }); //CLerk gives public key we check 
    //! says I know what i am doing
    if(!decoded){
        res.status(401).json({message:"Unauthorized"})
        return ;
    }

    const userId =(decoded as any).sub; 
    if(!userId){
        res.status(401).json({message:"Unauthorized"})
        return; //Early returning
    }

    req.userId = userId
    next();
}