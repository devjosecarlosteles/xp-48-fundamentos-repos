import { Notification } from "../../database/models/notification.model.js"
import { User } from "../../database/models/user.model.js"
import { createHash } from 'node:crypto'

export const findUserById = async (id) => {
  const user = await User.findOne({ where: { id } })

  return user
}

export const createUserRepository = async (name, password, email) => {
  return await User.create({ name, pass: password, email })
}

export const updateUserRepository = async (id, name) => {
  await User.update({ name }, { where: {
    id
  }})

  return await User.findOne({ where: { id } });
}

export const deleteUserRepository = async (id) => {
  await User.destroy({ where: { id } })
}

export const findAllUsersRepository = async (email) => {
  return await User.findAll({ 
    where: email ? { email } : undefined,
    include: [Notification]
  });
}
/**
 * It finds a user by name.
 * @param {string} name - The name of the user you want to find.
 * @returns The user object
 */

export const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } })

  return user
}