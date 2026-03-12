import { Locator } from "@playwright/test";
import { BasePage } from "../basePage";

export class LoginPage extends BasePage {
    usernameInput: Locator = this.page.locator("#wpName1");
    passwordInput: Locator = this.page.locator("#wpPassword1");
    signInButton: Locator = this.page.locator("#wpLoginAttempt");
    keepMeSignedInCheckbox: Locator = this.page.locator("#wpRemember")

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.keepMeSignedInCheckbox.click();
        await Promise.all([
            this.page.waitForURL((url) => !url.toString().includes("Special:UserLogin"), { timeout: 15000 }),
            this.signInButton.click(),
        ]);
    }
}
