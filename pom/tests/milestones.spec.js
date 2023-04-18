import { test, expect } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');
const { MilestonesPage } = require('../pages/milestonesPage');

test('Create a milestone', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const milestonesPage = new MilestonesPage(page);
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  
  await page.getByRole('tab', { name: 'My projects' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Project A' }).click();
  await page.getByRole('link', { name: 'Milestones' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add the First Milestone' }).click();
  await page.frameLocator('iframe').getByPlaceholder('Give this milestone a name').fill('My milestone');
  await page.frameLocator('iframe').locator('#addMilestoneForm').getByRole('button', { name: 'Add Milestone' }).click();
});

/*
test('Create a task and complete it', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);
  const taskListName = 'Task List 2'
  const taskName = 'Task 2.1'
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await tasksPage.newTaskList(taskListName);
  await tasksPage.newTask(taskName);
  
  //await tasksPage.completeTask();

});
*/
