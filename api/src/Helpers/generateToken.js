import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../../config.js";


export const tokenSign = async (user) =>{
    return jwt.sign(
        {
            _id: user._id,  
            role: user.role 
        },
        JWT_SECRET, 
        {
            expiresIn:"2h"
        }
    )
}

