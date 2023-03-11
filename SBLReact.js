const express = require("express");
const app = express();
const path = require("path");
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
app.use(express.json());

app.use(express.static(path.resolve(`./build`)));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./build", "index.html"));
// });
const accessLogStream = rfs.createStream('access.log', {
  size: '7K',
  interval: '1d',
  // compress: true,
  path: path.join(__dirname, 'log')
})

app.use(morgan('common', {stream: accessLogStream }));

app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/cats', (req, res) => {
  res.send('cats');
});

// require('./models/SampleModel');
// routes`
// require('./Routes/SampleRoute')(app);
// require('./Routes/NewloanRoute')(app);

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
