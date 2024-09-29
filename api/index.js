import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb working")
}).catch((err)=>{
    console.log(err)
})
const app = express();

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
});

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.json({
        message : 'API working',
    });
});