const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Date is required"
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type is required"
            }
        }
    ]
});
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;