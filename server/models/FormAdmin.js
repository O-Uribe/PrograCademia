/* Solo username y password */

import mongoose from 'mongoose';
import config from '../config.js';

const ADMIN_COLLECTION = config().ADMIN_COLLECTION;

const FormAdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    collection: ADMIN_COLLECTION,
});


export default mongoose.model('FormAdmin', FormAdminSchema);