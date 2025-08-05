const express=require('express');
const app=express();
const fs=require('fs');

app.use(express.static(__dirname+'/public'));

app.get('/users', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if(err) return res.send(err);
        let user=JSON.parse(data);
        res.json(user);
    })
})

app.listen(3000, () => {
    console.log('server started');
})

