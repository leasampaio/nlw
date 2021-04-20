import express, { response } from "express";



const app = express();

app.get('/', (req, resp)=>{
    return resp.send("Olá")
})
app.post("/", (req, resp)=>{
    return resp.json( )
})
app.listen(3333, ()=> console.log("Rodando!"))