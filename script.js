const mongoose = require('mongoose');
const User = require("./User");
mongoose.connect("mongodb://localhost/testdb");

run();

async function run() {
    const user = new User({ name: "Akhil", age: 26 });
    await user.save();
    console.log(user);
}