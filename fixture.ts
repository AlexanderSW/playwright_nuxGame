import { test as base } from "@playwright/test";
import { App } from "./src/pageObject/app";
type MyFixtures = {
    app: App;
};
export const test = base.extend<MyFixtures>({
    app: async ({ page }, use, testInfo) => {
        await use(new App(page, testInfo));
    }
});
