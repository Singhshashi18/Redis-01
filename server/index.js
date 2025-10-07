                 // Placeholder for Node.js/Express Redis backend setup
// Install dependencies: npm install express redis

const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

client.on('error', (err) => console.error('Redis error:', err));

app.get('/', async (req, res) => {
  client.set('key', 'value');
  client.get('key', (err, reply) => {
    res.send(`Redis value: ${reply}`);
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
