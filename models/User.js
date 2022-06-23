import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        validate: {
            validator : validator.isEmail,
            message : 'please provide a valid email',
        },
        required: [true, 'please provide your email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6,
        // select:false
    },
    lastname: {
        type: String,
        maxlength: 20,
        trim: true,
        default : 'lastName',
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default : 'my city',
    },
});

UserSchema.pre('save', async function(){
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  }
  
UserSchema.methods.createJWT=function(){
    return jwt.sign({ userId: this._id }, 
        process.env.JWT_SECRET, 
        {
        expiresIn: process.env.JWT_LIFETIME,
        }
      )
}



export default mongoose.model('User', UserSchema);