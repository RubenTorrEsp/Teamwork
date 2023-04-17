import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { TasksPage } = require('../pages/tasksPage');
import { URLS, CREDENTIALS } from '../data/Constants';



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
