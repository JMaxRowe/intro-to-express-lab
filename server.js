import express from 'express'

import morgan from 'morgan'

const app = express()
const port = 3000



// Task 1
const users = [
    {userId: 1, username: 'Christy'},
    {userId: 2, username: 'Mathilda'},
]

app.get("/greetings/:username", (req, res)=>{
    const user = users.find(user => user.username === req.params.username)
    if (!user) return res.send('<h1>ERROR: NO VALID USERNAME</h1>')
    res.send(`
        <h1>Greetings Earthling ${user.username}</h1>
`)
})



// Task 2
app.get('/roll/:num', (req, res)=>{
    const num = Number(req.params.num)
    if(!Number.isInteger(num)) return res.send('You must specify a number.')
    
    const roll = Math.floor(Math.random()*num) +1
    res.send(`<h1>You rolled ${roll}</h1>`)
})


// Task 3

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:Idx', (req, res)=>{
    const Idx = Number(req.params.Idx)
    const item = collectibles[Idx]
    if(!Number.isInteger(Idx))return res.send("This item is not yet in stock. Check back soon!")
    
    res.send(`So you want the ${item.name}? For ${item.price} it can be yours!`)
})




app.listen(port, () => console.log(`Server up and running on port ${port}`))