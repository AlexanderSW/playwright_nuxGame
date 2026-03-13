import { test as base } from "@playwright/test";
import { LoginPage } from "../pageObject/login/loginPage";
import fs from "fs";

// Declare the types of your fixtures.
type MyFixtures = {
  userToLogin: string;
  password: string;
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,
  password: undefined,

  page: async ({ page, userToLogin, password }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(userToLogin, password);

    await use(page);
  },
});

export { expect } from "@playwright/test";