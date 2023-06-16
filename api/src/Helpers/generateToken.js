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

export const verifyToken = async (token) =>{
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}
