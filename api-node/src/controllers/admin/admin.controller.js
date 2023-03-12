import jwt from 'jsonwebtoken';
import { findAllUsersRepository, findUserByEmail } from '../../repositories/users/users.repository.js';

export const findAllUsersAdmin = async (req, res) => {
  const users = await findAllUsersRepository();

  return res.status(200).json(users);
}

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const { pass, name } = await findUserByEmail(email);


  if (password === pass) {
    const secret = 'secret'

    const token = jwt.sign({ email, name }, secret, { expiresIn: '1h' });

    return res.status(202).json({ token })
  }

  res.status(401).json({ message: 'Credenciais inválidas' })
}