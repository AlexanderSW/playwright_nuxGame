import { test } from "../../fixture";

test.describe("Preferences Tests", () => {

    test.use({storageState:'./auth/user.json'})

    test("Setup user language", async ({ app, page }) => {
        const randomLanguage = app.userProfilePage.getRandomLanguage();
        console.log("Country code: " + randomLanguage.countryValue + "\nCountry name: " + randomLanguage.name)

        await app.userProfilePage.reload();
        await page.goto("https://commons.wikimedia.org/wiki/Main_Page", { waitUntil: "networkidle" })
        await app.userProfilePage.reload();

        await app.userProfilePage.navigateToUserProfile();

        await app.userProfilePage.chooseLanguage(randomLanguage.countryValue, randomLanguage.name)
        await app.userProfilePage.saveUserPreferences();

        await app.userProfilePage.checkingInterfaceLanguageChange(randomLanguage.countryValue, randomLanguage.name)
    });
});
