const {postTask }=require('./controllers');
const express = require('express');

const cors=require('cors');
const app= express();

app.use(cors());

app.use(express.json());

const mongoose=require('mongoose');
const { request } = require('express');
const collectionString = 'mongodb+srv://apsingh:vAIjCPGJFQBczE2p@cluster1.7a4xn.mongodb.net/Cluster1?retryWrites=true&w=majority';
app.post('/api/v1/taskManager',postTask);
let port = 4000;
app.listen(port,function(){
    try{
        mongoose.connect(collectionString);
        console.log("Server connected");
    }
    catch(e){
        console.log("HIII");
    }
});