import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

const users = [{
    id: 1,
    name: 'user01'
}, {
    id: 2,
    name: 'user02'
}];

app.get('/hello', (req, res) => {
   console.log('Received a request on the path /hello');
   res.send('Hello from express'); 
});

app.get('/users', (req, res) => {
    //load user data from database
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    const userId = Number(req.params.id);
    console.log(userId);
    const user =  users.find(u => u.id === userId);
    console.log(users);
    res.send(user);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;

    users.push(newUser);
    res.send(users);
})
app.listen(3001, () => console.log('Express is listening on port 3001.'));