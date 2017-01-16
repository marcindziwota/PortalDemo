var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

app.use(express.static('www'));
app.use(express.static(path.join('www', 'build')));

app.use(bodyParser.json());


var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dreamhouse';

if (process.env.DATABASE_URL !== undefined) {
  pg.defaults.ssl = true;
}

var client = new pg.Client(connectionString);
client.connect();

var hceTable = 'hce__c';

//setup the demo data if needed
// client.query('SELECT * FROM salesforce.hce__c', function(error, data) {
//   if (error !== null) {
//     client.query('SELECT * FROM hce__c', function(error, data) {
//       if (error !== null) {
//         console.log('Loading Demo Data...');
//         require('./db/demo.js')(client);
//         console.log('Done Loading Demo Data!');
//       }
//     });
//   }
//   else {
//     var schema = 'salesforce.';
//     hceTable = schema + 'hce__c';
//   }

require('./db/demo.js')(client);

app.get('/hce', function(req, res) {
  client.query('SELECT * FROM ' + hceTable, function(error, data) {
    res.json(data.rows);
  });
});

app.get('/hce/:id', function(req, res) {
  client.query('SELECT * FROM ' + hceTable + ' WHERE ' + hceTable + '.sfid = $1', [req.params.id], function(error, data) {
    res.json(data.rows[0]);
  });
});

var port = process.env.PORT || 8200;

app.listen(port);

console.log('Listening at: http://localhost:' + port);