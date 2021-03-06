const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const nav = require('./routes/nav')
const list = require('./routes/list')

// Import API Routes
app.use(users)
app.use(nav)
app.use(list)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
