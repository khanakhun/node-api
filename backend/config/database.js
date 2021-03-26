const dbDetails = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_MYSQL_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  dbDetails,
};
// module.exports = pool;
