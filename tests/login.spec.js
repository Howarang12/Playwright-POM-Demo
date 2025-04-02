import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.goToLoginPage();
    await Login.login('username', 'password');

});