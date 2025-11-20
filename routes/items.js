const express = require('express');
const router = express.Router();

let items = []; // In-memory store

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// CREATE item
router.post('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Item name is required" });
  }

  const newItem = {
    id: Date.now(),
    name
  };

  items.unshift(newItem);
  res.status(201).json(newItem);
});

// GET single item
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// DELETE item
router.delete('/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.json({ success: true });
});

module.exports = router;
