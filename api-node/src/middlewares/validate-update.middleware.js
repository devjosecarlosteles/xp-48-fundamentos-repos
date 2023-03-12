export default function validateUpdateMiddleware (req, res, next) {
  if (req.body.email) {
    return res.status(400).json({ err: 'Propriedade não pode ser alterada' });
  }

  next()
}