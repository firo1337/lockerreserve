const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentsSchema = new Schema({
    numCartao: {
        type: String,
        required:[true, 'Campo obrigatório!'],
    },
    password: {
        type: String,
        required:[true, 'Campo obrigatório!'],
    },
    nome: {
        type: String,
        // required:[true, 'Campo Obrigatório'],
    },
    ano: {
        type: Number,
        // required:[true, 'Campo Obrigatório'],
    },
    turma: {
        type: String,
        // required:[true, 'Campo Obrigatório'],
    },
    email: {
        type: String,
        // required:[true, 'Campo Obrigatório'],
    },
    numCacifo: {
        type: Number,
        // required:[true, 'Campo Obrigatório'],
    },
})
const studentModel = mongoose.model('students', studentsSchema);
module.exports = studentModel;