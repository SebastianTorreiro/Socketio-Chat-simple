import { verifyToken } from "../Helpers/generateToken"
import User from "../Models/User.js";

const checkRoleAuth = (roles) => async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ").pop();
        const tokenData = await verifyToken(token);
        const userData = await User.findById(tokenData._id);

        if([].concat(roles).includes(userData.role)){
            next()
        }else{
            res.status(401).json({Error:''})
        }
    } catch (error) {
        
    }
}