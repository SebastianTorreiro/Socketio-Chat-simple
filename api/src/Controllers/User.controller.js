import UserService from "../Service/User.Service.js";

const service = new UserService()


export default createUser = async () => {
    const {email, password} = req.body
    try {
        const createdUser = await service.createUser(email, password)
    } catch (error) {
        res.json({message: 'Error, no se pudo crear el usuario'})
    }
};
