import express from 'express';
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/async-orders');

import { shoppingRoutes } from './routes/index.js';

const app = express();

app.use('/shop', shoppingRoutes)
app.use('/', (req, res) => {
    return res.json({ message: "Status ok" })
})

app.listen(3001, () => {
    console.log("listening")
})