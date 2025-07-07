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
    if(!Number.isInteger(Idx) || Idx <= collectibles.length)return res.send("This item is not yet in stock. Check back soon!")
    
    res.send(`So you want the ${item.name}? For ${item.price} it can be yours!`)
})

// Task 4

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];


app.get('/shoes', (req,res)=>{
    const minPrice = Number(req.query['min-price'])
    const maxPrice = Number(req.query['max-price'])
    const type = req.query.type

    let filteredShoes = shoes;
    if(type){
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type)
    }
    if (!isNaN(minPrice)){
        filteredShoes = filteredShoes.filter(shoe => shoe.price >=minPrice)
    }
    if(!isNaN(maxPrice)){
        filteredShoes = filteredShoes.filter(shoe=> shoe.price <= maxPrice)
    }

    res.send(filteredShoes)


})





app.listen(port, () => console.log(`Server up and running on port ${port}`))