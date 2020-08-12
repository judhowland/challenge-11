const router = require("express").Router();
const notes = require("../../db/db.json");
const fs = require("fs")
const noteID = notes.map(note => note.id);
const path = require('path');


// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  let newID = 0;
  while(noteID.includes(newID)) {
      newID++;
  }

  req.body.id = newID;
  noteID.push(newID);

  const noteBody = req.body;
  notes.push(noteBody);
  res.json(noteBody);

  fs.writeFileSync(path.join(__dirname, "../../db/db.json"), 
  JSON.stringify(notes, null, 2)
  );
});

module.exports = router;