const express = require('express');
const { join } = require("path");
const PORT = process.env.PORT || 8080
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(join(__dirname, "public")));

app.use("/api", require("./routes/api"));

app.listen(PORT, function () {
    console.log(`Server running on port: ${PORT}`)
})