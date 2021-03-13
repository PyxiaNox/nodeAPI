require ('babel-register')
const func = require ('functions')
const express = require ('express')
const morgan = require ('morgan')
const app = express()

const members = [
    {
        id: 1,
        name: Kathleen
    },
    {
        id: 2,
        name: Basile
    },
    {
        id: 3,
        name: Pyxia
    }
]

app.use(morgan)

app.get('api/v1/members/:id', (req, res) =>{
    res.json(func.success(members[(req.params.id)-1].name))
})

app.get('api/v1/members', (req, res) =>{

    if (req.query.max != undefined && req.query.max > 0){
        res.json(func.success(members.slice(0, req.query.max)))
    } else if (req.query.max != undefined){
        res.json(func.error('Wrong max value'))
    } else{
        res.json(func.success(members))
    }
})


app.listen(8080, ()=> console.log('Started on port 8080.'))