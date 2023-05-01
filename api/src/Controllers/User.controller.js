import { encrypt, compare } from "../Helpers/handleBcrypt.js";
import User from "../Models/User.js";
import UserService from "../Service/User.Service.js";

const service = new UserService()


export default async function createUser(req, res){    
    try {
        const {email, password, edad, nombre} = req.body
        if(!email || !password || !edad || !nombre) return res.json({message: 'Error, no se enviaron los datos correspondientes'})
        const passwordHash = await encrypt(password)
        const createdUser = await service.createUser({email, password: passwordHash, edad, nombre})
        res.json({data:createdUser, status: 'OK'})
    } catch (error) {
        res.json({message: 'Error, no se pudo crear el usuario'})
    }
};


export default async function loginUser(req, res){
    try {
        const {email, password} = req.body
        const userFind = User.findOne({email})
        if(!userFind) return res.status(404).json({error:'No se a encontrado un usuario con ese email'})
        const passwordCompare = compare(password, userFind.password)
        console.log(passwordCompare)
        if(!passwordCompare) return res.json({Error:'La constraseña es incorrecta'})
        res.json(userFind)
        
    } catch (error) {
         
    }

}