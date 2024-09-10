const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://enzoguihartmann:ofiilUBa2zRgnuko@cluster0.a8ch9.mongodb.net/"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err))

module.exports = mongoose 