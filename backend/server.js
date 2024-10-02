// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aeroedgetechnologies:3p2zsj2gF9TWc4DU@aeroedge.k7so6.mongodb.net/mern-crud?retryWrites=true&w=majority&appName=Aeroedge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// mongoose.connect('mongodb://localhost:27017/mern-crud', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Item Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Consider hashing passwords
});

const User = mongoose.model('User', userSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organization: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or another email service
  auth: {
    user: 'your-email@gmail.com', // your email
    pass: 'your-email-password' // your email password or app password
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the AeroEdge API!');
});

// Contact Form Submission Route
app.post('/api/contact', async (req, res) => {
  const { name, organization, email, phone, message } = req.body;
  const contact = new Contact({ name, organization, email, phone, message });
  await contact.save();
  res.status(201).send({ message: 'Message sent successfully!' });
});

// CRUD Routes for Items
app.post('/api/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).send(item);
});

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

app.put('/api/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(item);
});

app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username
      , email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user: ' + error.message });
  }
});
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt with username:", username);
  
  try {
    // Convert username to lowercase for case-insensitive search
    const user = await User.findOne({ username: username.toLowerCase() });

    if (!user) {
      console.log("User not found in database.");
      return res.status(400).send({ message: 'Invalid username or password' });
    }

    console.log("User found:", user);

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    
    console.log("Password provided:", password);
    console.log("Stored hashed password:", user.password);
    console.log("Do passwords match?", isMatch);

    if (!isMatch) {
      console.log("Password does not match.");
      return res.status(400).send({ message: 'Invalid username or password' });
    }

    console.log("Login successful for user:", user.username);
    res.send({ message: 'Login successful' });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).send({ message: 'Error logging in: ' + error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
