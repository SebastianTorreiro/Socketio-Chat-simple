import mongoose from 'mongoose'
const password = 'wsdy450usdtLz89b'

const uri = `mongodb+srv://sebastian:${password}@cluster0.ji8l9rz.mongodb.net/?retryWrites=true&w=majority`

const connection = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} )

export default connection