import { expect } from "@playwright/test";
import { fixtures as test } from "../../lib/api/apiFixtures";
import { userData } from "../../lib/api/data/mocks/userMocks.ts";
import { randomJob, randomName } from "../../lib/helpers/randomiser";
import { createUser } from "../../lib/helpers/apiHelpers.ts";

test.describe("Users api tests", () => {
  test("Create user", async ({ userApi }) => {
    const { user, name, job } = await createUser(userApi);
    expect.soft(user.status).toBeTruthy();
    expect.soft(user.statusCode === 201).toBeTruthy();
    expect.soft(Array.isArray(user.body)).toBeFalsy();
    expect.soft(user.body.job).toBe(job);
    expect.soft(user.body.name).toBe(name);
    expect(test.info().errors).toHaveLength(0);
  });

  test("Delete user", async ({ userApi }) => {
    const { user } = await createUser(userApi);
    const response = await userApi.deleteUserById(user.body.id);
    expect(response.statusCode === 204).toBeTruthy();
  });

  test("Update full user details", async ({ userApi }) => {
    const updatedName = randomName();
    const updatedJob = randomJob();
    const { user } = await createUser(userApi);
    const response = await userApi.fullUpdateUserById(
      user.body.id,
      userData.customUser({ name: updatedName, job: updatedJob })
    );
    expect.soft(response.status).toBeTruthy();
    expect.soft(response.statusCode === 200).toBeTruthy();
    expect.soft(response.body.job).toBe(updatedJob);
    expect.soft(response.body.name).toBe(updatedName);
    expect(test.info().errors).toHaveLength(0);
  });
});
