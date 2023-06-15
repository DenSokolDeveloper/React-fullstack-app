const express = require('express');
const cors = require('cors');
const http = require('http');

const index = express();

index.use(cors());
index.use(express.json());
index.use(express.urlencoded({ extended: false }));

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.end(JSON.stringify({ message: "Welcome to root URL of Server" }));
});

index.use('/api/v1', router);

const port = process.env.PORT || 5000;

const server = http.createServer(index);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
