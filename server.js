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







app.listen(port, () => console.log(`Server up and running on port ${port}`))