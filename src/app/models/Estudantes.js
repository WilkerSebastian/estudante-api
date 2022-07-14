const { Model, DataTypes } = require('sequelize');

class Estudantes extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      datanascimento: DataTypes.DATE,
      cpf: DataTypes.STRING,
      ra: DataTypes.INTEGER,
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Estudantes;