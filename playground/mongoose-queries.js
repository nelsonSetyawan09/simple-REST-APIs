const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const { User } = require('../server/models/user');

const {ObjectID} = require('mongodb')


/* let _id = '5a0d2f4ccf25fd180e3de7f611';

if(!ObjectID.isValid(_id)){
    console.log('is not valid');
} */

// if  _id macth but not found
// still return data like null, empty array

// USER READ
let userId = '5a0ac5342106bd468c8c06f0';
User.findById(userId).then(user=>{
    // !null = true
    if(!user){
        return console.log('userId valid, but not found');
    }
    console.log('userId', user);
}).catch(e=> console.log('userId errorr, userId not valid'));

// TODO READ
/* Todo.find({
    _id
}).then(todos=>{
    console.log('todos',todos);
});

Todo.findOne({
    _id
}).then(todo=>{
    if(!todo){
        return console.log('id not found')
    }
    console.log('todo',todo);
}); */

/* Todo.findById(_id).then(todo=>{
    // if  _id macth but not found
    // still return data like null, empty array
    if (!todo) {
        return console.log('id not found')
    }
    console.log('todo by id', todo);
}).catch(e => console.log('eerorr, not valid id')) */