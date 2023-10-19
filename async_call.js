// Dependencias CommonJS
const request = require('request');

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';

letor = request(url,
    {json: true},
    (error, respuesta, body) => {
    let dinosaurios = body
    dinosaurios. forEach((dinosaurio)=>{
    console.log(dinosaurio.Name)
    console.log('------------')
    })
    })