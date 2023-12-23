const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technology: [
    {
      name: String,
    },
  ],
  link: String,
  Image: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
