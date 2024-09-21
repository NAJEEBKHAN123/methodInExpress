const express = require("express");
const app = express();

// app.get('/', (req, res) =>{
//   res.status(200).json("home page")
// })

app.use((req, res) => {
  console.log("req recieved");
  // res.send(["najee", "khan", "waqas", "uamar"]);
  // res.send({
  //   name: 'najee',
  //   email : 'najeebkhan@gmail.com'
  // })
  res.send("<h1>hello this is h1 </h1> <ul><li>apple</li><li>orange</li></ul>");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server was run on http://localhost:${PORT}`);
});
