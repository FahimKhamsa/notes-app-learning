const chalk = require("chalk");
const yargs = require("yargs");
const noteUtils = require("./notes.js");

// add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    noteUtils.addNote(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandCommand: true,
      type: "string",
    },
  },
  handler(argv) {
    noteUtils.removeNote(argv.title);
  },
});

// read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandCommand: true,
      type: "string",
    },
  },
  handler(argv) {
    noteUtils.readNote(argv.title);
  },
});

// list command
yargs.command({
  command: "list",
  describe: "Show the list of notes",
  handler() {
    noteUtils.listNotes();
  },
});

yargs.parse();
