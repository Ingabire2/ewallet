// const express = require("express");
// const mongoose = require ("mongoose");
// require ("dotenv").config();

// const app = express();
// app.use(express.json())

// const port = 3001; 
// const database = process.env.DATABASE;

// mongoose.connect (database,{
//     useNewUrlParser:true,
//     // useCreateIndex:true,
//     useUnifiedTopology:true, 
// })
// .then( ()=>{
//     console.log("MongoDB database connection established successfully.");
//  });

// app.listen (port ,()=>{
//     console.log(`App is listening at on port ${port}`);
// });
import express from 'express';
import cors from 'cors';
import connectDb from './database/dbConnect';
import routes from './routes';

const app = express();
connectDb();
app.use(express.json());
app.enable('trust proxy');
app.use(cors());

app.use('/api', routes);

export default app;
