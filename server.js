require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const mongoURL = process.env.MONGO_URL;

const dbName = process.env.MONGO_DB_NAME;

const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    process.on('SIGINT', () => {
      client.close();
      console.log('Disconnected from MongoDB');
      process.exit(0);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api', (req, res) => {
  res.json({message: 'Hello, World! API endpoint.'});
});