import { ERROR_INVALID_PASSWORD_TYPE, ERROR_PASSWORD_SIZE } from "../errors/errors.js";

export default function verifyPassword  (req, res, next) {
  const { password } = req.body;
  
  if (typeof password !== 'string' && typeof password !== 'number') {
    return res.status(400).json({ message: ERROR_INVALID_PASSWORD_TYPE })
  }
    
  if (password.length < 8) {
    return res.status(400).json({ message: ERROR_PASSWORD_SIZE })
  }

  next()
}