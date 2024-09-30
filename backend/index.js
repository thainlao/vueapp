import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import orderRouter from './router/OrderRouter.js'

dotenv.config();
connectDB()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/order', orderRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});