const db = require("../models/workout.js");
const router = require("express").Router();

router.get("/workouts", (req, res) => {
    db.find({}).sort({ day: -1 }).limit(1)
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/workouts/range", (req, res) => {
    db.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/workouts", ({ body }, res) => {
    db.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.put('/workouts/:id', (req, res) => {
    db.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;