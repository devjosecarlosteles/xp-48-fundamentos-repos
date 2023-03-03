import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const User = db.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { 
  timestamps: false
})