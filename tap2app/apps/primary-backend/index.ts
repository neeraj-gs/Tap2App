import {prismaClient} from "db/client"
import express from "express"
import cors from "cors"
import { authMiddleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(cors())


//Endpoints

//Creating a Project
app.post("/createProject",authMiddleware ,async(req,res)=>{
    const {prompt} = req.body; //Initial prompt that user provides
    const userId = req.userId!;
    //TODO: Add logic to get a Useful Name for the project from the prompt
    const description = prompt.split("\n")[0];
    const project = await prismaClient.project.create({
        data:{description,userId}
    })
    res.json({projectId:project.id})
})

//Get Projets of a Specific User
app.get("/getProjects",authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const project = await prismaClient.project.findFirst({
        where:{userId}
    });
    res.json(project)
})



app.listen(3000,()=>{
    console.log("Server is Running on port 3000")
})
