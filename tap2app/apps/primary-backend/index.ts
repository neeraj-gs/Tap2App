import {prismaClient} from "db/client"
import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())


//Exdppints

//Creating a Project
app.post("/createProject",async(req,res)=>{
    const {prompt} = req.body //Initial prompt that user provides
    const project = await prismaClient.project.create({
        data:{prompt}
    })
    res.json(project)
})






