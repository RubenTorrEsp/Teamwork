import { test } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');
const { TasksPage } = require('../pages/tasksPage');


test('Create a task', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);
  const taskListName = 'Task List 1'
  const taskName = 'Task 1.1'
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await tasksPage.newTaskList(taskListName);
  await tasksPage.newTask(taskName);

});


test('Complete a task', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);
  const taskListName = 'Task List 2'
  const taskName = 'Task 2.1'
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await tasksPage.newTaskList(taskListName);
  await tasksPage.newTask(taskName);
  
  const element = page.locator("//a[text()='Task List 2']/parent::h3/parent::div/parent::div/descendant::button[1]");
  await element.click();

  //await tasksPage.completeTask();

});
