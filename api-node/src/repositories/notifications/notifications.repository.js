import { Notification } from "../../database/models/notification.model.js";

export class NotificationsRepository {
  async findAll() {
    return await Notification.findAll()
  }
}