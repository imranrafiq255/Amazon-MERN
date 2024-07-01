const app = require("./app");

const PORT = process.env.PORT || 4501;
app.listen(PORT, () => {
  console.log(`Server is connected on: ${PORT}`);
});
