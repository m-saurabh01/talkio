import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; 
import sequelize from './config/db.js'; 
import cors from 'cors'; 
import bodyParser from 'body-parser';




dotenv.config();
const app = express();
app.use(cors()); 

//app.use(express.json());

app.use(bodyParser.json());

app.use('/auth', authRoutes);

sequelize.sync().then(() => console.log('Database connected'));

export default app;
