import formatUserResponse from '../../core/utils/format-user-response.js';
import { 
  createUserRepository, 
  findAllUsersRepository, 
  findUserByEmail, 
  findUserById, 
  updateUserRepository 
} from '../../repositories/users/users.repository.js'

import jwt from 'jsonwebtoken';

export const findOneUserById = async (req, res) => {
  const { id } = req.params

  const user = await findUserById(id)

  if (!user) {
    return res.status(404).json({ message: 'NOT FOUND' })
  }

  return res.status(200).json({ user });
}


export const findAllUsers = async (req, res) => {
  const { email } = req.user;

  const users = await findAllUsersRepository(email)

  const formatUsers = users.map(user => {
    return formatUserResponse(user);
  })

  return res.status(200).json(formatUsers);
}

export const createUser = async (req, res) => {
  const { name, password, email, } = req.body

  const user = await createUserRepository(name, password, email)

  return res.status(201).json({ user });
}

export const updateUserById = async (req, res) => {
  const { id } = req.headers;
  const { name } = req.body;

  const user = await updateUserRepository(id, name)

  return res.status(202).json(user );
}

export const deleteUserById = async (req, res) => {
  const { id } = req.headers;

  await deleteUserById(id)
  
  return res.status(204).send()
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { pass, name } = await findUserByEmail(email);


  if (password === pass) {
    const secret = 'secret'

    const token = jwt.sign({ email, name }, secret, { expiresIn: '1h' });

    return res.status(202).json({ token })
  }

  res.status(401).json({ message: 'Credenciais inválidas' })
}
