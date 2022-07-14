require('dotenv').config()
const shelljs = require("shelljs")
const App = require("./App")

require("./app/database")

const app = new App()

const port = process.env.PORT || 8080

app.server.listen(port , () => {

    shelljs.exec("npx sequelize-cli db:migrate")

    console.log("servidor rodando na porta " + port);

})