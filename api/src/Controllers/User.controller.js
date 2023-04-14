import UserService from "../Service/User.Service.js";

const service = new UserService()


export default async function createUser(req, res){
    const {email, password} = req.body
    try {
        const createdUser = await service.createUser(email, password)
        res.json({data:createdUser, status: 'OK'})
    } catch (error) {
        res.json({message: 'Error, no se pudo crear el usuario'})
    }
};
