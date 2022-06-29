const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    numCartao: {
        type: String,
        required:[true, 'Campo obrigatório!'],
    },
    password: {
        type: String,
        required:[true, 'Campo obrigatório!'],
    }
    
});
const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;