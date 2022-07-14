'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('estudantes' , {

      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },
      name: {
        
        type: Sequelize.STRING,
        allowNull: false

      },
      datanascimento: {

        type: Sequelize.DATE,
        allowNull: false

      },
      cpf: {

        type: Sequelize.STRING,
        allowNull: false

      },
      ra: {

        type: Sequelize.INTEGER,
        allowNull: false

      },
      email: {

        type: Sequelize.STRING,
        allowNull: false

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('estudantes')
  }
};
