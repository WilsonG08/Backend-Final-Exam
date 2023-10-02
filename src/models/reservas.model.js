import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        conferencistaiD: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Conferencista',
            required: true,
        },
        auditorioiD: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Auditorio',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
