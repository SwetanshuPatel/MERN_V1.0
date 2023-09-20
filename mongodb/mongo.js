const { MongoClient } = require('mongodb');

// Connection URL
const url = "mongodb+srv://swetanshu_patel:SugEXwDxEOhivR28@cluster0.eiki1yl.mongodb.net/"; 

// Database Name
const dbName = 'test'; // Replace with your desired database name

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database (create it if it doesn't exist)
    const db = client.db(dbName);

    // Perform database operations here

    // Close the connection
    client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the connect function to establish the connection
connect();