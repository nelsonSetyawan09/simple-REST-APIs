const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const { ObjectID } = require('mongodb')

let todos = [
    {
        _id: new ObjectID().toHexString(),
        text: 'some text to remove'
    },
    {
        _id: new ObjectID().toHexString(),
        text: 'other text to remove'
    }]

// insert todos
 newTodo = new Todo({text:todos[0].text, _id:todos[0]._id});
 newTodo.save().then(todo=>{
     console.log(todo)
 });

// REMOVE ALL
/* Todo.remove({}).then(result=>{
    console.log('remove all: ',result);
}); */


// REMOVE JUST ONE
/* Todo.findOneAndRemove({ text: todos[0].text}).then(result=>{
    console.log('removeOne: ',result)
}); */


// REMOVE BY ID
/* tidak bisa gunakan todos[0]._id
    karena setiap kali program dijalankan 
    todos[0]._id akan membuat _id yang baru
    sehingga tidak akan sama dengan yang ada pada database mongoDB*/
Todo.findByIdAndRemove(`5a0e435f144019168e71b9a9`).then(result=>{
    console.log('removeById: ',result);
});