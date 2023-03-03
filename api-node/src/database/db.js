import Sequelize from 'sequelize';

const DB_NAME='devjo_db';
const DB_USER='devjo';
const DB_PASS='123';
const DB_CONFIGS = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIGS);

(async () => {
  try {
    await db.authenticate();
    console.log('Conectado com sucesso!')
  } catch (err) {
    console.error(err)
  }
})()

export { db };