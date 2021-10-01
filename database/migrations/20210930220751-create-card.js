'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doc_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      journey_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_manager: {
        allowNull: false,
        type: Sequelize.STRING
      },
      waspang: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      task: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpmlexity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      scrum_number: {
        type: Sequelize.INTEGER
      },
      sprint_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      project_type: {
        type: Sequelize.STRING
      },
      business_user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      node_impacted: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      vendor_name: {
        type: Sequelize.STRING
      },
      mandays: {
        type: Sequelize.INTEGER
      },
      methodolgyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model: "methodology", key: "id" }
      },
      listId: {
        type: Sequelize.INTEGER,
        references:{ model: "list", key: "id" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  }
};