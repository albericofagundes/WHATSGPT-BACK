const app = require("./app");

const port = process.env.PORT || 5000;

console.log("server.js: port =>", port);

// app.listen(port);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
