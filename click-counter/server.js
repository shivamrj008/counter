const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

const filePath = path.join(__dirname, "clicks.txt");

app.use(express.static(__dirname));

app.post("/save-click", (req, res) => {
  let count = 0;

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");

    count = parseInt(data) || 0;
  }

  count++;

  fs.writeFileSync(filePath, count.toString());

  res.json({
    success: true,
    count: count,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
