import { User } from "../helpers/types";
import { BaseApi } from "./BaseApi";

export class UserApi extends BaseApi {
  protected url = "users";

  createUser(data: User) {
    return this.create(data);
  }

  deleteUserById(userId: number) {
    return this.delete(userId);
  }

  fullUpdateUserById(userId: number, data: Partial<User>) {
    return this.update(userId, "put", data);
  }
}
