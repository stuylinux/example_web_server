const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const app = express();
const port = 3000;

let os_file = fs.readFileSync("/etc/os-release", "utf8");
const os_info = os_file.split("\n").splice(0, 3);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
	res.send("Hello World from " + String(os_info));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
