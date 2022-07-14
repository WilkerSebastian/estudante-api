require('dotenv').config()

const App = require("./App")

require("./app/database")

const app = new App()

const port = process.env.PORT || 8080

app.server.listen(port , () => {

    console.log("servidor rodando na porta " + port);

})