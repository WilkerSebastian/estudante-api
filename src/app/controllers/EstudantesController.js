const estudantes = require("../models/Estudantes")

class EstudantesController {

    async cadastro(req, res) {

        try {

            const estudante = await estudantes.create(req.body);
            return res.status(200).json(estudante);

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    async getEstudantes(req, res) {

        try {
            
            const estudanteAll = await estudantes.findAll();
            return res.status(200).json(estudanteAll);

        } catch (error) {

            return res.status(500).json(error.message);

        }

    }

    async getEstudandeById(req , res) {

        const {id} = req.params

        try {
            
            const estudante = await estudantes.findOne({

                where: {

                    id: Number(id)

                }

            });
            return res.status(200).json(estudante);

        } catch (error) {

            return res.status(500).json(error.message);

        }

    }

    async upEstudante(req , res) {

        const {id} = req.params

        try {
            
            await estudantes.update(req.body , {

                where: {

                    id:Number(id)

                }
                
            });

            const estudante = await estudantes.findByPk(Number(id))

            return res.status(200).json(estudante);

        } catch (error) {

            return res.status(500).json(error.message);

        }

    }

    async deletarEstudante(req , res) {

        const {id} = req.params

        try {
            
            await estudantes.destroy({where: {

                id: Number(id)

            }})

            return res.status(200).json({message: `estudante do id: ${id} foi deletado`});

        } catch (error) {

            return res.status(500).json(error.message);

        }

    }

}

module.exports = new EstudantesController();