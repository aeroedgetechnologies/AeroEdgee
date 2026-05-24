// server.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { Resend } = require('resend');
const {
  buildContactEmailHtml,
  buildContactEmailText,
} = require('./contactEmailTemplate');

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const allowedOrigins = [
  'https://aetechnologies.in',
  'https://www.aetechnologies.in',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

mongoose.set('bufferCommands', false);

function isMongoConnected() {
  return mongoose.connection.readyState === 1;
}

if (!MONGO_URI) {
  console.error(
    'MongoDB connection error: MONGO_URI (or MONGODB_URI) is not set in environment variables.'
  );
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB runtime error:', err);
  });
}

// Item Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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

if (!process.env.RESEND_API_KEY) {
  console.warn(
    'RESEND_API_KEY not set — contact form emails will not send until configured.'
  );
}

async function sendContactNotification({ name, organization, email, phone, message }) {
  const payload = { name, organization, email, phone, message };

  const orgPart = organization ? ` (${organization})` : '';

  await resend.emails.send({
    from: 'AeroEdge Contact Form <onboarding@resend.dev>',
    to: 'aeroedgetechnologies@gmail.com',
    replyTo: email,
    subject: `Website inquiry: ${name}${orgPart}`,
    html: buildContactEmailHtml(payload),
    text: buildContactEmailText(payload),
  });
  console.log('Email sent successfully');
}

app.get('/', (req, res) => {
  res.send('Welcome to the AeroEdge API!');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mongoConnected: isMongoConnected(),
    mongoState: mongoose.connection.readyState,
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Contact Form Submission Route
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form data:', req.body);
  const { name, organization, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({
      message: 'Name, email, and message are required.',
    });
  }

  const contact = new Contact({
    name,
    organization,
    email,
    phone,
    message,
  });

  let saved = false;
  let emailed = false;

  if (isMongoConnected()) {
    try {
      await contact.save();
      saved = true;
      console.log('MongoDB save successful');
    } catch (error) {
      console.error('MongoDB save error:', error);
    }
  } else {
    console.warn(
      'MongoDB not connected — skipping database save. Set MONGO_URI on Render and allow Atlas access.'
    );
  }

  if (saved && process.env.RESEND_API_KEY) {
    try {
      await sendContactNotification({
        name,
        organization,
        email,
        phone,
        message,
      });
      emailed = true;
    } catch (err) {
      console.error('Email sending error:', err);
    }
  } else if (!process.env.RESEND_API_KEY) {
    console.warn(
      'Email send skipped: RESEND_API_KEY must be set in environment variables.'
    );
  }

  if (saved || emailed) {
    return res.status(201).send({
      message: 'Message sent successfully!',
      saved,
      emailed,
    });
  }

  return res.status(500).send({
    message: 'Failed to save message and send notification.',
  });
});

// CRUD Routes for Items
app.post('/api/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(400).send({ message: 'Failed to create item.' });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send({ message: 'Failed to fetch items.' });
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).send({ message: 'Item not found.' });
    }
    res.send(item);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(400).send({ message: 'Failed to update item.' });
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).send({ message: 'Item not found.' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(400).send({ message: 'Failed to delete item.' });
  }
});

// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).send({ message: 'Error creating user: ' + error.message });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Login attempt with username:', username);

  try {
    const user = await User.findOne({ username: username.toLowerCase() });

    if (!user) {
      console.log('User not found in database.');
      return res.status(400).send({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Password does not match.');
      return res.status(400).send({ message: 'Invalid username or password' });
    }

    console.log('Login successful for user:', user.username);
    res.send({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).send({ message: 'Error logging in: ' + error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
