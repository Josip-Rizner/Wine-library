import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true}
}, {timestamps: true});

const User = mongoose.model('user', userSchema);

