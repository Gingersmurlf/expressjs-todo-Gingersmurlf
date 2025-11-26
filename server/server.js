import express from "express"
import cors from "cors"

const PORT = 6767

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/indhold/sigma", (req, res) => {
    console.log(req.body);
    res.send(req.body)
    
})

app.listen(PORT, (err) => {
    if(err) return console.log(err)
    console.log(`starting server on localhost:${PORT}`)
})