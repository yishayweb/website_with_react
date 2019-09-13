const express = require('express');
const path = require('path');
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express();
app.use(express.json())
app.use(userRouter)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'productionLocal') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('react-server/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'react-server', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
