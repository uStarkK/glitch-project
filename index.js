const express = require("express")
const PORT = 3001;
const APP = express()
let moment = require("moment")
/* const SERVER = HTTP.createServer((request, response)=>{
    let hora = moment().format("HH");
    let minutos = moment().format("mm")
    if(hora >= 6 && hora <=12 ){
        response.end(`Buenos dias! Son las ${hora}:${minutos}`);
    } else if (hora >= 13 && hora <= 19){
        response.end(`Buenas tardes! Son las ${hora}:${minutos}`);
    } else{
        response.end(`Buenas noches! Son las ${hora}:${minutos}`);
    }
}); */

let visitas = 0

APP.get("/", (req, res, next) => {
    res.send(`<h1 style="color:blue"> Hola Culo </h1>`)
})



APP.get("/visitas", (req, res, next) => {
    visitas ++
    res.send(`Eres la visita N° ${visitas}`)
})


APP.get("/fyh", (req, res, next) => {
    let hora = moment().format("HH");
    let minutos = moment().format("mm")
    let dia = moment().format("DD/MM/YYYY")
    if(hora >= 6 && hora <=12 ){
        res.json(`Buenos dias! Son las ${hora}:${minutos} del dia ${dia}`);
    } else if (hora >= 13 && hora <= 19){
        res.json(`Buenas tardes! Son las ${hora}:${minutos} del dia ${dia}`);
    } else{ 
        res.json(`Buenas noches! Son las ${hora}:${minutos} del dia ${dia}`);
    }
})


APP.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))