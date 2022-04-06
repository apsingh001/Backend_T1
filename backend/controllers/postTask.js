const Task=require('../models/typeofInputs');

function postTask(request,response){
    try{
    const newTask=new Task(request.body);

    newTask.save().then(function(){
        console.log("Saved");
    });    
    let data=request.body;
    response.status(200).json({error:'',message:`Task ${request.body.taskDescription} succesfully added`});
    }
    catch(e){
        response.status(500).json(e);
        console.log("NOOOOO");
    }
}

module.exports = postTask;
