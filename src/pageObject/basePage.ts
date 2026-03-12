import { Page } from "@playwright/test";

export class BasePage {
    url = "/enwiki/wiki/Special:UserLogin/login";
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async reload() {
        await this.page.reload({ waitUntil: "networkidle" })
    }

    async timeOut(timeNum: number) {
        await this.page.waitForTimeout(timeNum);
    }
}
