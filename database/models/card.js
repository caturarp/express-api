'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Card.init({
    name: DataTypes.STRING,
    doc_type: DataTypes.STRING,
    journey_type: DataTypes.STRING,
    category: DataTypes.STRING,
    product_manager: DataTypes.STRING,
    waspang: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE,
    task: DataTypes.STRING,
    cpmlexity: DataTypes.STRING,
    description: DataTypes.TEXT,
    scrum_number: DataTypes.INTEGER,
    sprint_number: DataTypes.INTEGER,
    project_type: DataTypes.STRING,
    business_user: DataTypes.STRING,
    node_impacted: DataTypes.STRING,
    source: DataTypes.STRING,
    vendor_name: DataTypes.STRING,
    mandays: DataTypes.INTEGER,
    methodolgyId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};