// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.TasksPage = class TasksPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.myProjects = page.getByRole('tab', { name: 'My projects' })
    this.projectA = page.frameLocator('iframe').getByRole('link', { name: 'Project A' })
    this.addTaskList = page.frameLocator('iframe').getByRole('button', { name: 'Add Task List' })
    this.taskListName = page.frameLocator('iframe').getByPlaceholder('e.g.')
    this.createTaskList = page.frameLocator('iframe').getByRole('button', { name: 'Add Task List', exact: true })

    this.addTask = page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add a task' });
    this.taskName = page.frameLocator('iframe').getByPlaceholder('What needs to be done?');
    this.createTask = page.frameLocator('iframe').getByRole('button', { name: 'Create Task' });

    this.completeTaskIcon = page.locator("//button[@class='w-task-row__check w-task-row__subtask-align tipped-delegate show-on-mouseenter w-task-row__check--complete tpd-delegation-uid-5']")
  }


  async newTaskList(taskListName){
    await this.myProjects.click();
    await this.projectA.click();
    await this.addTaskList.click();
    await this.taskListName.fill(taskListName);
    await this.createTaskList.click();
  }

  async newTask(taskName){
    await this.addTask.click();
    await this.taskName.fill(taskName);
    await this.createTask.click();
  }

  async completeTask(){
    await this.completeTaskIcon.click();
  }

}