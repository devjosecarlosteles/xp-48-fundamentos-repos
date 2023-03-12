import { NotificationsRepository } from "../../repositories/notifications/notifications.repository.js";

export default class NotificationsController {
  constructor (repository) {
    this.repository = repository
  }

  async findAll(req, res) {
    // const repository = new NotificationsRepository()
    const notifications = await repository.findAll();

    return res.status(200).json(notifications)
  }
}