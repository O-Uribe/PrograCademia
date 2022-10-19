const config = require("dotenv")
config.config()

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    PROFE_COLLECTION: process.env.DB_COLLECTION_PROFESORES
}