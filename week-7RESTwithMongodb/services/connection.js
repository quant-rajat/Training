var express = require('express');
var router = express.Router();
const MongoClient= require('mongodb').MongoClient;




function viewDocuments() {
    MongoClient.connect('mongodb://localhost:27017/', (err, Client) => {
        if (err) {
            return console.log("unable to connect to database");
        }
        console.log("successfully connected to database");
        let db = Client.db('Users');

        var output=[];
        var cursor =db.collection('Userlist').find().toArray((err,results)=>{

            for(doc of results){
                console.log(doc);
                output.push(doc);
            }
          //  res.json(output);
        });
        Client.close();
    });
}





function addUser(userinfo){
    MongoClient.connect('mongodb://localhost:27017/', (err, Client) => {
        if (err) {
            return console.log("unable to connect to database");
        }
        console.log("successfully connected to database");
        let db = Client.db('Users');

    db.collection('Userlist').insertOne(userinfo,(err,result)=>{
        if(err){console.log('unable to insert');}
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    Client.close();
});
}

function removeUser(username,password) {
    console.log(username);
    MongoClient.connect('mongodb://localhost:27017/', (err, Client) => {
        if (err) {
            return console.log("unable to connect to database");
        }
        console.log("successfully connected to database");
        let db = Client.db('Users');
       var a= db.collection('Userlist').removeOne({"username":username});
       a.then(()=>{
           console.log("successfully removed");
       });

    Client.close();
    });
}

function updateUser(username,password,newname) {
    MongoClient.connect('mongodb://localhost:27017/', (err, Client) => {
        if (err) {
            return console.log("unable to connect to database");
        }
        console.log("successfully connected to database");
        let db = Client.db('Users');

        db.collection('Userlist').updateOne({"and":[{"username":username},{"password":password}]},{$set:{"username":newname}}).then(()=>{
            console.log("Succesfully updated");
        });


 Client.close();
    });
}

module.exports={
    viewDocuments,
    addUser,
    removeUser,
    updateUser
};