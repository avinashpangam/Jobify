import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {CustomAPIError,NotFoundError,BadRequestError} from '../errors/index.js'


const register = async (req,res) =>{
     const {email,name,password}=req.body
     const userAlreadyExists= await User.findOne({email});
     
     if(!name || !email || !password)
      {
          throw new BadRequestError('please provide all values')
      }
      
      if(userAlreadyExists){
          throw new BadRequestError('Email already exists')
      }
        const user = await User.create({email,name,password});
        const token=user.createJWT()
        res.status(StatusCodes.CREATED).json({user:{
            email:user.email,
            lastName:user.lastName,
            location:user.location,
            name:user.name,
        },
        token,
        location: user.location,}
        )}



const login = async (req,res) =>{
    res.send('login');
}

const updateUser = async (req,res) =>{
    res.send('updateUser');
}

export {register, login , updateUser}