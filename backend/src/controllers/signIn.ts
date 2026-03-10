import { Request, Response } from "express";
import jwt from "jsonwebtoken"

export  const signIn = (req:Request,res: Response) => {
    const {username,password} = req.body;
    const token = jwt.sign(username,secret)

 }