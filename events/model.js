const Sequelize = require('sequelize');
const db = require('../db');
const User = require('../user/model');

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(12340),
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  }
});

Event.belongsTo(User);
User.hasMany(Event);

module.exports = Event;
