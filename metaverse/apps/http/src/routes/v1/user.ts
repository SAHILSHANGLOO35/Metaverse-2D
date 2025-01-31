import { Router } from "express";

export const userRouter = Router(); 

userRouter.use("/user");

userRouter.post("/metadata", (req, res) => {
    
});

userRouter.get("/metadata/bulk", (req, res) => {

})