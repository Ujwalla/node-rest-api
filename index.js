const express = require('express');
const cors = require('cors');
const itemsRouter = require('./routes/items');

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.json({ status: "Node REST API running successfully" });
});

// Items routes
app.use('/api/items', itemsRouter);

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
