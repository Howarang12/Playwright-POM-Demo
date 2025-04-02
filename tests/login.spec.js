import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('test', async ({ page }) => {

    const Login = new LoginPage(page);

    Login.goto();
    Login.login('username', 'password');
    
});