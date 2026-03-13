import { test } from '../../src/fixtures/authFixture';

test.use({ userToLogin: process.env.USERNAME, password: process.env.PASSWORD });

test('setup storage state', async ({ page, context }) => {
    const cookieFilePath = './auth/user.json';

    await context.storageState({ path: cookieFilePath })
})