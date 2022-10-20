import config from 'dotenv' 
config.config()

export default function() {
    return {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
        PROFE_COLLECTION: process.env.DB_COLLECTION_PROFESORES
    }
}


// module.exports = {
//     PORT: process.env.PORT,
//     MONGO_URI: process.env.MONGO_URI,
//     PROFE_COLLECTION: process.env.DB_COLLECTION_PROFESORES
//}