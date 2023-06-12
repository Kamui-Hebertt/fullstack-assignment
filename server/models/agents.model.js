const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Agents extends Sequelize.Model { }
Agents.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    photoUrl: {
      type: Sequelize.STRING
    },
    agentLicence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    practiceAreas: {
      type: Sequelize.STRING
    },
    aboutMe: {
      type: Sequelize.TEXT
    }
  },
  {
    sequelize,
    modelName: 'Agents',
    tableName: 'agents',
    // options
  }
);

module.exports = {
  sequelize,
  Agents
};
