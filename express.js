const express = require('express')
 
const PORT = 3000;

const app =  express();
app.use(express.json());

const users = [
    {id: 1, name: 'najeeb', email : "najeeb@gamil.com"},
    {id: 2, name: 'nauman', email : "nauman@gamil.com"}
]

app.get('/', (req, res) =>{ 
    res.status(200).json({message : 'GET request successfully', data: users})
})

app.post('/api/user', (req, res) =>{
    const user = req.body;
    
    const newUser = {
        id: users.length + 1,
        ...user
    }
    users.push(newUser)
    res.status(201).json({message : 'User added successfully...', data: newUser})
})

app.put('/api/user/:id', (req, res) => {
   
    const id = parseInt(req.params.id)
    const updateUse = req.body;

    const userIndex = users.findIndex(user => user.id === id)
    if(userIndex === -1){
        res.status(404).json({message: 'User not found!'})
    }
    users[userIndex] = {
        ...users[userIndex],
        ...updateUse
    }
    res.status(200).json({ message: 'User updated successfully.', data: users[userIndex] });
});

app.delete('/api/user/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1){
        return res.status(404).json({message : 'User not found!'})
    }

    users.splice(userIndex, 1)
    res.status(200).json({message: 'User Deleted successfully.'})

})
app.listen(PORT, () =>{
    console.log(`Server is running here http://localhost:${PORT}`)
})


