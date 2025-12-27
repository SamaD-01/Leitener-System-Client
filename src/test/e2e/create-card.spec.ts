import { test, expect } from '@playwright/test';

test.describe('Create Card Scenario', () => {
    test('As a connected user, I can create a card', async ({ page }) => {
        await page.goto('/login');
        await page.getByPlaceholder('Email').fill('user@example.com');
        await page.getByPlaceholder('Password').fill('password123');
        await page.getByRole('button', { name: /sign in/i }).click();
        
        await expect(page).toHaveURL('/');
        
        await page.getByRole('link', { name: /cards/i }).click();
        await expect(page).toHaveURL('/cards');

        await page.getByRole('link', { name: /create card/i }).click();
        await expect(page).toHaveURL('/cards/new');
        
        const question = 'What is the answer to everything?';
        const answer = '42';
        const tag = 'Philosophy';

        await page.getByPlaceholder(/what is the question/i).fill(question);
        await page.getByPlaceholder(/what is the answer/i).fill(answer);
        await page.getByPlaceholder(/e\.g\., javascript/i).fill(tag);
        
        await page.getByRole('button', { name: /create card/i }).click();
        
        await expect(page).toHaveURL('/cards');
    });
});
