import { UserApi } from "../api/UsersApi";
import { userData } from "../api/data/mocks/userMocks";
import { randomJob, randomName } from "./randomiser";

export async function createUser(userApi: UserApi) {
  const name = randomName();
  const job = randomJob();
  const user = await userApi.createUser(userData.customUser({ name, job }));
  return { user, name, job };
}
