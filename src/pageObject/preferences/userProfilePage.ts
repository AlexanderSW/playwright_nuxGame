import { expect, Locator } from "@playwright/test";
import { BasePage } from "../basePage";
import { LANGUAGE_OPTIONS_ARRAY } from "../../constants/userPreferences/languagesConstants";

export class UserProfilePage extends BasePage {

    userLinksDropdown: Locator = this.page.locator("#vector-user-links-dropdown-checkbox");
    userPreferencesLink: Locator = this.page.locator("xpath=//li[@id='pt-preferences']//a[@href='/wiki/Special:Preferences']");
    userProfileTab: Locator = this.page.locator("xpath=//div[@role='tab'][1]//span");
    languageSelectField: Locator = this.page.locator("xpath=//select[@id='mw-input-wplanguage']/following::input[1]");
    savePreferencesButton: Locator = this.page.locator("xpath=//span[@id='prefcontrol']//button");
    languageTextOnSelect: Locator = this.page.locator("xpath=//select[@id='mw-input-wplanguage']//option[@selected]")

    languageOption(languageCode: string, language: string): Locator {
        return this.page.getByRole('option', { name: `${languageCode} - ${language}` });
    }

    getRandomLanguage() {
        const index = Math.floor(Math.random() * LANGUAGE_OPTIONS_ARRAY.length);
        return LANGUAGE_OPTIONS_ARRAY[index];
    }

    async navigateToUserProfile() {
        await this.userLinksDropdown.click();
        await this.userPreferencesLink.click();
        await this.page.waitForLoadState("networkidle");
        await this.userProfileTab.click();
        await this.page.waitForLoadState("networkidle");
    }

    async chooseLanguage(languageCode: string, language: string) {
        await this.page.waitForLoadState("domcontentloaded");
        await expect(this.languageSelectField).toBeVisible();
        await this.languageSelectField.clear();
        await this.languageSelectField.fill(language);
        await expect(this.languageOption(languageCode, language)).toBeVisible();
        await this.languageOption(languageCode, language).click();
    }

    async saveUserPreferences() {
        await this.savePreferencesButton.click();
    }

    async checkingInterfaceLanguageChange(languageCode: string, language: string) {
        await expect(this.languageTextOnSelect).toBeHidden();
        await expect(this.languageTextOnSelect).toHaveText(`${languageCode} - ${language}`);
    }
}
