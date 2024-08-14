const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./User');
const Post = require('./Post');

// Define associations
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, sequelize };

