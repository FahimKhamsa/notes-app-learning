const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added Successfully!"));
  } else {
    console.log(chalk.red("Note Title already taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red("No Note Found!"));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.green("Note Removed Successfully!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes: "));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find((note) => note.title === title);

  if (targetNote) {
    console.log(chalk.whiteBright.bgGreen("Note Found!"));
    console.log(chalk.blue(targetNote.title) + " : " + targetNote.body);
  } else {
    console.log(chalk.bgRed.white("No Note Found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
