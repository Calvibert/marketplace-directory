
const express = require('express');
var cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/add', (req, res) => {
  fs.readFile('./storage.json', 'utf8' , (err, data) => {
    if (err) {
      req.send('1');
      return;
    }
    data["id"] = v4();
    if (data === '') {
      var currentData = {};
    } else {
      var currentData = JSON.parse(data);
    }
    currentData[req.body.business] = req.body;

    fs.writeFile('storage.json', JSON.stringify(currentData, null, 4), 'utf8', function(err) {
      if (err) {
        req.send('1');
        return;
      }
    });
  })

  res.send();
});

app.get('/directory', (req, res) => {
  fs.readFile('./storage.json', 'utf8' , (err, data) => {
    if (err) {
      req.send('1');
      return;
    }
    res.send(data);
  });
});

app.get('/search', (req, res) => {
  console.log(req.query);
  var query = JSON.parse(req.query.data);
  fs.readFile('./storage.json', 'utf8' , (err, data) => {
    if (err) {
      req.send('1');
      return;
    }
    var result = [];
    data = JSON.parse(data);
    for (var i = 0; i < data.length; ++i) {
      console.log(query);
      console.log(query['what']);
      console.log(data[i].business);
      console.log(data[i].description);
      if (data[i].business.toLowerCase().includes(query['what'].toLowerCase()) || data[i].description.toLowerCase().includes(query['what'].toLowerCase())) {
        result.push(data[i]);
      }
    }
    console.log(result);
    res.send(JSON.stringify(result));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

