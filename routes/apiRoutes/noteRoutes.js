const router = require("express").Router();
const save = require("./db/save");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  save
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  save
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// // BONUS DELETE "/api/notes" deletes the note with an id equal to req.params.id
// router.delete("/notes/:id", function(req, res) {
//   save
//     .removeNote(req.params.id)
//     .then(() => res.json({ ok: true }))
//     .catch(err => res.status(500).json(err));
// });

module.exports = router;