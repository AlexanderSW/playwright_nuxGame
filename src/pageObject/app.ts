import { Page, TestInfo } from "@playwright/test";
import { BasePage } from "./basePage";
import { LoginPage } from "./login/loginPage"
import { RegistrationPage } from "./registration/registrationPage";
import { UserProfilePage } from "./preferences/userProfilePage";

export class App {

    basePage!: BasePage;
    loginPage!: LoginPage;
    registrationPage!: RegistrationPage;
    userProfilePage!: UserProfilePage;

    testInfo: TestInfo;
    url = "";

    constructor(private page: Page, testInfo: TestInfo) {
        this.testInfo = testInfo;
        this.basePage = new BasePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
        this.userProfilePage = new UserProfilePage(this.page);
    }
}
