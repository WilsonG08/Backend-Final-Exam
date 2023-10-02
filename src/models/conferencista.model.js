import mongoose from "mongoose";
import { number } from "zod";

const conferencistaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true,
            unique: true,
        },
        cedula: {
            type: String,
            required: true,
            unique: true,
        },
        genero: {
            type: String,
            required: true,
            unique: true,
        },
        ciudad: {
            type: String,
            required: true,
            unique: true,
        },
        direccion: {
            type: String,
            required: true,
            unique: true,
        },
        fecha_nacimiento: {
            type: String,
            required: true,
            unique: true,
        },
        telefono: {
            type: number,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        empresa: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Conferencista", conferencistaSchema);
