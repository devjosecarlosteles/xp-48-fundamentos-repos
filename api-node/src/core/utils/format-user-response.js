export default function formatUserResponse(user) {
  const { email, name, id, notifications } = user;

  return {
    email,
    name,
    id,
    notifications
  }
}