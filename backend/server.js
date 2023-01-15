import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import bodyParser from 'body-parser';
import path from 'path';
import pusher from 'pusher';
Grid.mongo = mongoose.mongo
// app config--
const app = express();
const port = process.env.PORT || 9000
// middlewares--
app.use(bodyParser.json());
app.use(cors());
// db config---
mongoose.connect('mongodb+srv://facebook:fb123@facebook.anaqrnr.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.on('error', error => {
  console.log("connection failed");
})
mongoose.connection.on('connected', connected => {
  console.log("Alhamdulilah connected to Database");
})
// api routes--
app.get('/', (req, res) => res.status(200).send('hello whats App...! i am fb-clone'))
// listen--
app.listen((port), () => console.log(`listening on localhost:${port}`));