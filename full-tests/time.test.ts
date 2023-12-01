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

test('test visibilité bouton soleil non rempli ou égal à 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('1');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('0');
  await expect(page.locator('#btn')).not.toBeVisible();
});

test('test visibilité bouton terre non remplie ou égale à 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('0');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('1');
  await expect(page.locator('#btn')).not.toBeVisible();
});

test('le texte de résultat ne doit pas apparaître quand on change la valeur dun cadran', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('1');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('1');
  await page.locator('#btn').click();
  await page.locator('#moon').fill('2');
  await expect(page.locator('#msg')).not.toBeVisible();
});

test('le texte de résultat apparait quand le bouton de calcul est cliqué', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#moon').click();
  await page.locator('#moon').fill('1');
  await page.locator('#earth').click();
  await page.locator('#earth').fill('1');
  await page.locator('#sun').click();
  await page.locator('#sun').fill('1');
  await page.locator('#btn').click();
  await expect(page.locator('#msg')).toContainText("Zone de temps de Jupiter");
});