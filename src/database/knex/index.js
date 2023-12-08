const config = require("../../../knexfile")
const knex = require("knex")

const connectionn = knex(config.development);

module.exports = connectionn;

