📝 Node REST API (Express.js)

A clean and professional REST API backend built using Node.js and Express.js.
This project demonstrates API design, routing, HTTP methods, and JSON handling — ideal for portfolio and backend fundamentals.

🚀 Features

✔ Create items
✔ Get all items
✔ Get a single item by ID
✔ Delete items
✔ Organized routing structure
✔ CORS enabled
✔ Clean, readable code


🛠 Tech Stack
Node.js
Express.js
JavaScript (ES6+)
CORS


📂 Folder Structure

node-rest-api/
│── package.json
│── index.js
│── routes/
│   └── items.js
│── README.md

📌 API Endpoints
GET /

Health check →
Returns:
{ "status": "Node REST API running successfully" }


GET /api/items
Fetch all items.


POST /api/items
Add a new item.
Body:
{
  "name": "Milk"
}


GET /api/items/:id
Get a single item by ID.


DELETE /api/items/:id
Delete an item by ID.


💻 Run Locally
npm install
npm start
