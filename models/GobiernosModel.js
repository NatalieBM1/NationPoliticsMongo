const mongoose = require('mongoose');

const gobiernosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    codigo_iso: {
        type: String,
        required: true,
    },
    tipoGobierno: {
        type: String,
        required: true,
    },
    jefeEstado: {
        type: String,
        required: true,
    },
    jefeGobierno: {
        type: String,
        required: true,
    },
    duracionMandato: {
        type: Number,
        required: true,
    },
    inicioMandato: {
        type: Date,
        required: true,
    },
    finMandato: {
        type: Date,
        required: false,  
        default: null,    
    },
    partidoPolitico: {
        type: String,
        required: true,
    },
    camaraLegislativa: {
        type: String,
        required: true,
    },
    sistemaElectoral: {
        type: String,
        required: true,
    },
    constitucionVigente: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Gobiernos', gobiernosSchema);
