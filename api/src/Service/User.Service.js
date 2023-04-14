import User from "../Models/User.js"

class UserService{

async createUser(email, password){
try {
    const userCreated = new User({email, password})
    userCreated.save()
    return userCreated
} catch (error) {
    return error
}
}
}

export default UserService