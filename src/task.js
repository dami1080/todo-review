export default class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

export default class TaskUtils {
  constructor(actions) {
    this.actions = actions;
  }

  addTask(task) {
    const tasks = this.actions.getItems();
    tasks.push(task);
    this.actions.setItem(tasks);

  }  
}