const db = require("./db.js")

const Schema = db.Schema 

const petShema = new Schema({
    nome: {
        type: String,
        required: true 
    }
})

const Pet = db.model("Pet", petShema)


Pet.create({
    nome:"César", 
    idade: 30
})