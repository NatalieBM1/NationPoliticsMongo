const mongoose = require('mongoose');

const lideresPoliticosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    cargo_actual: {
        type: String,
        required: false,
        default: null,
    },
    partido_politico: {
        type: String,
        required: false,
        default: null,
    },
    inicio_cargo: {
        type: Date,
        required: false,
        default: null,
    },
    fin_cargo: {
        type: Date,
        required: false,
        default: null,
    },
    educacion: {
        type: String,
        required: false,
        default: null,
    },
    experiencias_previas: {
        type: String,
        required: false,
        default: null,
    }
});

module.exports = mongoose.model('LideresPoliticos', lideresPoliticosSchema);
