import { faker } from "@faker-js/faker";

export function randomName() {
  return faker.internet.userName();
}

export function randomJob() {
  return faker.person.jobTitle();
}
