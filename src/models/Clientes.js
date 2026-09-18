import { Schema, model } from "mongoose";

const clienteEsquema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    edad: {
        type: Number,
        required: true
    }
});

export default model("Clientes", clienteEsquema);