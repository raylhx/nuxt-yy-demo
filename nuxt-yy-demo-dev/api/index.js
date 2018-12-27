const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const nav = require('./routes/nav')

// Import API Routes
app.use(users)
app.use(nav)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
