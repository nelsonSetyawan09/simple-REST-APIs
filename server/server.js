// library import
const express = require('express');
const bodyParser = require('body-parser');

// local import
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


const app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    let todo = new Todo({text: req.body.text});
    todo.save().then(doc =>{
        res.send(doc)
    }, (e)=>{
        res.send(e)
    });
});

app.get('/todos',async (req,res)=>{
    // return all todos collections
    try{
        let todos = await Todo.find();
        res.send({citraTodos:todos})
    }catch(e){
        res.status(400).send(e)
    }

});
app.get('/todos/:id', async (req,res)=>{
    try{
        let todo = await Todo.findById(req.params.id);
        if (!todo) {
            // console.log('NOT FOUND ID')
            res.status(404).send('not found todo');
        }else{
            // console.log('FOUND TODO', todo);
            res.send({ citraTodo: todo })
        }
    }catch(e){
        // console.log('errrorr, not valid id')
        res.status(400).send('errorr, not valid todo id');
    }
});

app.delete('/todos/:id', async (req,res)=>{
    try{
        let todoRemove = await Todo.findByIdAndRemove(req.params.id)
        // todoRemove === null if id not found
        // todoRemove === { _id:** ,text: '**',__v: 0,completeAt: null,complete: false} if id found
        if(!todoRemove){
            res.status(404).send('not found id, so can not delete');
        }else{
            res.send(`removeTodo: ${todoRemove}`);
        }
    }catch(e){
        res.status(400).send('eorrrorr, not remove todo because id invalid');
    }
});

// UPD;ATE DATABASE
app.put('/todos/:id', async (req, res) =>{
    try{
        let todoUpdate = await Todo.findByIdAndUpdate(req.params.id,
            { $set: { text: 'I am still love you citra'}});
        console.log(todoUpdate);
        if (!todoUpdate) {
            res.status(404).send('todo not update, because _id not found');
        } else {
            res.send(`todo update: ${todoUpdate}`);
        }
    }catch(e){
        res.status(400).send('errorrr, not valid _id');
    }
});



let port = process.env.PORT || 1337
app.listen(port,()=>{
    console.log(`server has running on port ${port}`);
});


module.exports={app}