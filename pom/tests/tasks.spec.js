import { test } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');
const { TasksPage } = require('../pages/tasksPage');


test('Create a task', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);
  var taskListName = 'Create a task list'
  var taskName = 'Create a task'
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await tasksPage.newTaskList(taskListName);
  await tasksPage.newTask(taskName);

});


test('Complete a task', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const tasksPage = new TasksPage(page);
  const taskListName = 'Create another task list'
  const taskName = 'Create a task and complete it'
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await tasksPage.newTaskList(taskListName);
  await tasksPage.newTask(taskName);
  
  //await page.locator("//a[text()='Create another task list']/parent::h3/parent::div/parent::div/descendant::button[1]").click();

  

});
