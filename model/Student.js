import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {
        type: String,
        required: true,

    },

    studentId: {
        type:Number,
         required: true,
    },
    branch:{
        type: String,
      //  required: true,
    },
    year:{
        type: String,
      //  required: true,
    },
    contact:{
        type:Number,
      //  required: true,
    },
    email: {
        type: String,
       // required: true,
    },
});

export default mongoose.model("Student",studentSchema);