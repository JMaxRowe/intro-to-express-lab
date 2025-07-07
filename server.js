import express from 'express'

import morgan from 'morgan'

const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Server up and running on port ${port}`))