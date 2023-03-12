import { ERROR_DUPLICATE_EMAIL } from "../errors/errors.js";
import { findUserByEmail } from "../repositories/users/users.repository.js";

export default async function verifyEmailAlreadyExists (req, res, next) {
  const { email } = req.body;

  const user = await findUserByEmail(email);

  if (user) {
    return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) })
  }

  next()
}