import { test, expect } from '@playwright/test';

test('test lune=-1', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('-1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('1');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('1');
  await page.getByRole('button', { name: 'Valider' }).click();
  await expect(page.locator('#errormsg')).toContainText("Vous devez entrer comme valeurs 1 ou 2");
  //await expect(page.getByText('Vous devez entrer comme')).toContainText("Vous devez entrer comme valeurs 1 ou 2");
});
test('test terre=3', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('3');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('1');
  await page.getByRole('button', { name: 'Valider' }).click();
  await expect(page.locator('#errormsg')).toContainText("Vous devez entrer comme valeurs 1 ou 2");
  //await expect(page.getByText('Vous devez entrer comme')).toContainText("Vous devez entrer comme valeurs 1 ou 2");
});