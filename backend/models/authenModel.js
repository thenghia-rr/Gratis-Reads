import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        nameUser: { type: String, require: true},
        email: { type: String, required: true},
        password: { type: String, required: true},
        rePassword: { type: String, required: true}
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model('User', userSchema) 