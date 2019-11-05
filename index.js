const server = require('./server');
const port = process.env.PORT || 4000;
server.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});