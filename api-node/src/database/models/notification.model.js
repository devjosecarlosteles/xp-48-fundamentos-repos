import { DataTypes } from "sequelize";
import { db } from "../db.js";
import { User } from "./user.model.js";

export const Notification = db.define('notifications', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, { 
  timestamps: false
})

User.hasMany(Notification, { foreignKey: 'user_id' })
Notification.belongsTo(User, { foreignKey: 'user_id' })