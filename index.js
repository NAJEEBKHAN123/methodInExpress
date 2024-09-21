const express = require("express")

const app = express();
app.use(express.json());

//get request route
app.get('/', (req, res) =>{
    res.status(200).json("get method was run on home path")
})

app.get('/about', (req, res) =>{
    res.status(200).json("get method was run on about path!")
})
app.get('/contact', (req, res) =>{
    res.status(200).json('get method was run on contact path')
})

// POST request route
app.post('/user/items', (req, res) =>{
    const newItem = req.body;
    const {name, email} = req.body;
    res.status(200).json({message: `POST request - adding new item`, data: newItem})  
    console.log(({message: `POST request - Name: ${name} Email: ${email}`}) ) 

    
})

// PUT request route
 app.put('/user/items/:id', (req, res) =>{
   const userId = req.params.id;
   const updateItems = req.body;
   res.status(200).json({message: `PUT request - updating new item ${userId}`, data : updateItems })
 })

// DELETE request route 
app.delete('/user/items/:id', (req, res) =>{
    const userId = req.params.id;
    res.status(200).json({message: `DELETE request - Deleting item ${userId}`})
})

app.use((req, res) =>{
    res.status(404).json({message: 'Route not found'})
})

let PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server was run on http://localhost:${PORT}`)
})