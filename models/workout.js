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
				required: 'Please add an exercise type.'
			},
			name: {
				type: String,
				trim: true,
				required: 'Please provide an exercise name',
			},
			distance: {
				type: Number,
				trim: true
			},
			duration: {
				type: Number,
				trim: true
			},
			weight: {
				type: Number,
				trim: true
			},
			sets: {
				type: Number,
				trim: true
			},
			reps: {
				type: Number,
				trim: true
			}
        }
    ]
});
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;