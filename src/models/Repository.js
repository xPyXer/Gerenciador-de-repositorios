import mongoose from "mongoose";

//Não é um DB relacional
const repoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
            unique: true
        },
        userId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Repository', repoSchema);