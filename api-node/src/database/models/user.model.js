import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const User = db.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { 
  timestamps: false
})

User.associate = function(models) {
  User.hasMany(models.Notification, { foreignKey: 'user_id' })
}