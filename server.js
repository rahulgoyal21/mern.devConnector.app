const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

app.get("/", (req, res) => res.send("API runnning"));

const PORT = process.env.PORT || 5000;

//Defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
