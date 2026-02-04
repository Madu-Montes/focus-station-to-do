import { Injectable, signal } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>([]);

  constructor() {}
  addTask(title: string, priority: 'high' | 'medium' | 'low') {
  const newTask: Task = {
    id: Date.now(),
    title,
    priority,
    completed: false
  };

  this.tasks.update(tasks => [...tasks, newTask]);
}
}


