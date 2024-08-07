import { faker } from "@faker-js/faker";
import { User } from "../../../helpers/types";

const userData = {
  customUser: (data: User): User => ({
    name: data.name || faker.internet.userName(),
    job: data.job || faker.person.jobTitle(),
  }),
};

export { userData };
