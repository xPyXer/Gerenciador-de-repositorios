import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
        email: {
            type: String,
            require: true,
            index: true,
            unique: true,
            sparse: true,
        },
        password: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
    }
);  
  
export default mongoose.model('User', userSchema);