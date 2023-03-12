import { ERROR_SIZE_NAME, ERROR_TYPE_NAME } from "../errors/errors.js";

export default function verifyFieldName (req, res, next) {
  const { name } = req.body;
  
  if (typeof name !== 'string') {
    return res.status(400).json({ message: ERROR_TYPE_NAME })
  }
    
  if (name.length < 3) {
    return res.status(400).json({ message: ERROR_SIZE_NAME })
  }

  next()
}