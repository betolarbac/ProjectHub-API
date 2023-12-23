const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://betocrdev:pNGEZeMiNiwIDLGb@project.qk3kfrc.mongodb.net/meusProjetos?retryWrites=true&w=majority"
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error)
  }
}


module.exports = main