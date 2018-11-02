const Sequelize = require('sequelize');

const sequelize = new Sequelize('personal_website', 'seulwoolee', '', {
  dialect: 'postgres',
});


sequelize.authenticate()
  .then( () => console.log('connected to pwb'))
  .catch(err => console.error(err))

module.exports = sequelize;
