
class IndexController{

    async index(req , res) {

        res.status(200).json({

            titulo: "APi para maniupalção de estudantes",
            git: "https://github.com/WilkerSebastian/estudante-api.git"

        })

    }

}

module.exports = new IndexController();